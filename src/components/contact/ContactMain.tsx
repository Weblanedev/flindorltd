import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import ContactFormMain from './ContactFormMain';
import ContactMap from './ContactMap';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const ContactMain = () => {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <ContactFormMain />
      <ContactMap />
      <SidebarMain />
    </>
  );
};

export default ContactMain;
