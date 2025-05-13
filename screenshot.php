
<?php
/**
 * Generate a blank screenshot.png placeholder for the theme
 * (In a real scenario, you would replace this with an actual screenshot image)
 */
header('Content-Type: image/png');
$im = imagecreatetruecolor(1200, 900);
$bg = imagecolorallocate($im, 59, 130, 246); // Blue color
$text_color = imagecolorallocate($im, 255, 255, 255);
imagefill($im, 0, 0, $bg);
imagestring($im, 5, 540, 440, 'Speed E-Log Theme', $text_color);
imagepng($im);
imagedestroy($im);
?>
