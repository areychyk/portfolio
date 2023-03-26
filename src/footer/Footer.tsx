import React from 'react';
import s from './Footer.module.css'

import {v1} from "uuid";


export const Footer = () => {


    const iconForFooter=[
        {
            id:v1(),
            icon:'icon_1'
        },
        {
            id:v1(),
            icon:'icon_2'
        },
        {
            id:v1(),
            icon:'icon_3'
        },
        {
            id:v1(),
            icon:'icon_4'
        },
    ]


    return (
        <div className={s.footerBlock}>
            <div className={`container`  + ' ' + s.footerContainer}>
                <h2 className={s.title}>My Last and first name</h2>
                <div className={s.footerIcon}>
                    {iconForFooter.map(i=><div key={i.id} className={s.icon}>{i.icon}</div>)}

                </div>
                <span className={s.copyright}> © 2023 All rights reserved </span>

            </div>
        </div>
    );
};

