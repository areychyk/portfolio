import React from 'react';
import s from './Nav.module.scss'


export const Nav = () => {
    // return (
    //     <div className={s.nav}>
    //        <a href={''}>Main</a>
    //        <a href={''}>Skills</a>
    //        <a href={''}>Works</a>
    //        <a href={''}>Contacts</a>
    //
    //     </div>
    // );
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a href={'#main'} className={s.link}>
                        Main
                    </a>
                </li>
                <li className={s.item}>
                    <a href={'#skills'} className={s.link}>
                        Skills
                    </a>
                </li>
                <li className={s.item}>
                    <a href={'#works'} className={s.link}>
                        Works
                    </a>
                </li>
                <li className={s.item}>
                    <a href={'#contact'} className={s.link}>
                        Contacts
                    </a>
                </li>
            </ul>
        </nav>
    )
};

