import React from 'react';
import logoImg from '../../../public/assets/img/logo/logo.svg';
import preloaderIMg from '../../../public/assets/img/logo/preloader.svg';
import Image from 'next/image';

const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
              <Image src={logoImg} alt="logo-img" />
              <Image className="loading-logo" src={preloaderIMg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
