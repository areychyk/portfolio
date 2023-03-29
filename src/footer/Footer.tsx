import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../common/components/title/Title";
import { footer } from './footer.data'




export const Footer = () => {


    return (
        <footer className={s.footer}>
            <div className={`container`}>
                <Title title={'Denis Aryichuk'}/>
                <ul className={s.list}>
                    {footer.map(({ link, id, Icon, prefix }) => {
                        return (
                            <li key={id} className={s.item}>
                                <a rel='noreferrer' target={'_blank'} href={link}>
                                    <Icon className={`${s[`${prefix}`]}`} size={50} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <p className={s.copy}>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    )
};

