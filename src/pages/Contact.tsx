
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactFAQLink } from "@/components/contact/ContactFAQLink";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ContactHeader />

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
          
          <ContactFAQLink />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
