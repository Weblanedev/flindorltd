
import Link from 'next/link';
import React from 'react';
type GetIconProps = {
    WrapperClass: string;
}
const SocialIcon = ({ WrapperClass }: GetIconProps) => {
    return (
        <div className={WrapperClass && WrapperClass}>
            <Link  href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
            <Link  href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link>
            <Link  href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
            <Link target="_blank"  href="https://www.google.com/"><i className="fab fa-google-plus-g"></i></Link>
        </div>
    );
};

export default SocialIcon;