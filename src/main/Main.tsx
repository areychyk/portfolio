import React from 'react';
import s from './Main.module.css';
import container from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={container.container}>
            <div className={s.aboutMe}>
                <span>Hi</span>
                <h1>I am first name and last name </h1>
                <p>Information about me</p>
            </div>
            <div className={s.photo}></div>

            </div>

        </div>
    );
};

