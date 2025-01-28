import Link from 'next/link';
import React from 'react';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const ErrorMain = () => {
  return (
    <>
      <section className="error-area">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content">
                <div className="error-number">404</div>
                <h2 className="error-text">
                  Sorry! <br /> Page not found
                </h2>
                <p>
                  The page you are looking for might have been removed its name
                  changed or is temporarily unavailable.
                </p>
                <div className="error-btn">
                  <Link href="/" className="fill-btn">
                    Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SidebarMain />
    </>
  );
};

export default ErrorMain;
