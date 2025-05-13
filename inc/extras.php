
<?php
/**
 * Custom functions that act independently of the theme templates
 */

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function speedelog_pingback_header() {
    if (is_singular() && pings_open()) {
        printf('<link rel="pingback" href="%s">', esc_url(get_bloginfo('pingback_url')));
    }
}
add_action('wp_head', 'speedelog_pingback_header');

/**
 * Add custom classes to menu items
 */
function speedelog_add_menu_link_class($atts, $item, $args) {
    if (property_exists($args, 'add_li_class')) {
        $atts['class'] = $args->add_li_class;
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'speedelog_add_menu_link_class', 1, 3);

/**
 * Add custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function speedelog_body_classes($classes) {
    // Adds a class of hfeed to non-singular pages.
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }

    return $classes;
}
add_filter('body_class', 'speedelog_body_classes');

/**
 * Process contact form submission
 */
function speedelog_process_contact_form() {
    if (isset($_POST['contact_nonce']) && wp_verify_nonce($_POST['contact_nonce'], 'contact_form_nonce')) {
        // Get form data
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $phone = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
        $message = sanitize_textarea_field($_POST['message']);
        $consent = isset($_POST['consent']) ? true : false;
        
        // Validate form data
        if (empty($name) || empty($email) || empty($message) || !$consent) {
            wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
            exit;
        }
        
        // Email recipient
        $to = get_option('admin_email');
        
        // Email subject
        $subject = 'Nouvelle demande de contact sur ' . get_bloginfo('name');
        
        // Email headers
        $headers = array();
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $headers[] = 'From: ' . $name . ' <' . $email . '>';
        $headers[] = 'Reply-To: ' . $email;
        
        // Email message
        $email_message = '<p><strong>Nom:</strong> ' . $name . '</p>';
        $email_message .= '<p><strong>Email:</strong> ' . $email . '</p>';
        
        if (!empty($phone)) {
            $email_message .= '<p><strong>Téléphone:</strong> ' . $phone . '</p>';
        }
        
        $email_message .= '<p><strong>Message:</strong></p>';
        $email_message .= '<p>' . nl2br($message) . '</p>';
        $email_message .= '<p>Ce message a été envoyé via le formulaire de contact du site ' . get_bloginfo('name') . '.</p>';
        
        // Send email
        $sent = wp_mail($to, $subject, $email_message, $headers);
        
        if ($sent) {
            wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
        } else {
            wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
        }
        exit;
    }
}
add_action('init', 'speedelog_process_contact_form');

/**
 * Display contact form messages
 */
function speedelog_display_contact_form_messages() {
    if (isset($_GET['contact'])) {
        if ($_GET['contact'] === 'success') {
            echo '<div class="message-success bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">';
            echo '<p>Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>';
            echo '</div>';
        } elseif ($_GET['contact'] === 'error') {
            echo '<div class="message-error bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">';
            echo '<p>Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.</p>';
            echo '</div>';
        }
    }
}
add_action('speedelog_before_contact_form', 'speedelog_display_contact_form_messages');
