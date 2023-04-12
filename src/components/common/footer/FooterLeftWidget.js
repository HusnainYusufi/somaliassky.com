import React from 'react';
import Logo from "../Logo";
import LogoNew from '../../../assets/images/Logo.jpeg'
import SocialProfile from "../../other/account/SocialProfile";

function FooterLeftWidget({footerleftcnts}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="footer-item">
                    <div className="logo">
                        <Logo url={LogoNew} className="foot-logo" />
                        <p className="footer__desc">
                            {footerleftcnts.footerdesc}
                        </p>
                        <SocialProfile socials={footerleftcnts.sociallinks} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterLeftWidget;
