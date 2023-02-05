import React from 'react';
import s from './Footer.module.css'
import container from '../common/styles/Container.module.css'


export const Footer = () => {


    return (
        <div className={s.footerBlock}>
            <div className={container.container + ' ' + s.footerContainer}>
                <h2 className={s.title}>My Last and first name</h2>
                <div className={s.footerIcon}>
                    <div className={s.icon}>icon_1</div>
                    <div className={s.icon}>icon_2</div>
                    <div className={s.icon}>icon_3</div>
                    <div className={s.icon}>icon_4</div>
                </div>
                <span className={s.spamInFooter}>
                    © 2023 All rights reserved
                </span>


            </div>


        </div>
    );
};

