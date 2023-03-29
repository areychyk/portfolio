import React from 'react';
import s from './Header.module.scss'
import {Nav} from "./nav/Nav";


export const Header = () => {

    return (
        <header className={s.header}>
            <div className={`container ${s.container}`}>
                {/*<ButtonSwitcher />*/}
                <Nav/>
            </div>
        </header>
    )
};

