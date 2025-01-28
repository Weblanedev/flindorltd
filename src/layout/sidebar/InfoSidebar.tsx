// import useGlobalContext from '@/hooks/use-context';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../../../public/assets/img/portfolio/p1.jpg';
import img2 from '../../../public/assets/img/portfolio/p2.jpg';
import img3 from '../../../public/assets/img/portfolio/p3.png';
import img4 from '../../../public/assets/img/portfolio/p4.png';
import img5 from '../../../public/assets/img/portfolio/p5.png';
import img6 from '../../../public/assets/img/portfolio/p6.png';
import logo from '../../../public/assets/img/logo/white-logo.png';
import SocialIcon from '../social-icon/SocialIcon';

type TSidebarProps = {
  isOpenInfoSidebar: boolean;
  setIsOpenInfoSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const InfoSidebar = ({
  isOpenInfoSidebar,
  setIsOpenInfoSidebar,
}: TSidebarProps) => {
  return (
    <>
      <div
        className={isOpenInfoSidebar ? 'extra-info info-open' : 'extra-info'}
      >
        <div className="close-icon">
          <button onClick={() => setIsOpenInfoSidebar(!isOpenInfoSidebar)}>
            <i className="far fa-window-close"></i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <Link href="/">
            <Image
              src={logo}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
        </div>
        <div className="side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>123/A, Miranda City Likaoli Prikano, Dope</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <Link href="tel:+01234567899">+0989 7876 9865 9</Link>
            <br />
            <Link href="tel:+01234567899">+(090) 8765 86543 85</Link>
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <Link href="mailto:info@example.com" target="_blank">
              info@example.com
            </Link>
            <br />
            <Link href="mailto:example.mail@hum.com" target="_blank">
              example.mail@hum.com
            </Link>
          </div>
        </div>
        <div className="instagram">
          <Link href="#">
            <Image
              src={img1}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
          <Link href="#">
            <Image
              src={img2}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
          <Link href="#">
            <Image
              src={img3}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
          <Link href="#">
            <Image
              src={img4}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
          <Link href="#">
            <Image
              src={img5}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
          <Link href="#">
            <Image
              src={img6}
              style={{ height: 'auto', width: 'auto' }}
              alt="image not found"
            />
          </Link>
        </div>
        <SocialIcon WrapperClass="social-icon-right mt-20" />
      </div>
    </>
  );
};

export default InfoSidebar;
