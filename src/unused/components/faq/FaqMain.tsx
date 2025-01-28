import React from 'react';
import BreadCrumb from '../../../components/SharedComponents/BreadCrumb';
import FaqContent from './FaqContent';
import FaqFormMain from './FaqFormMain';
import SidebarMain from '../../../components/SharedComponents/Sidebars/SidebarMain';

const FaqMain = () => {
  return (
    <>
      <BreadCrumb title="Faq" />
      <FaqContent />
      <FaqFormMain />
      <SidebarMain />
    </>
  );
};

export default FaqMain;
