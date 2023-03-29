import React from 'react';
import s from './Main.module.scss';



export const Main = () => {
    return (
        <section id={'main'} className={s.main}>
                {/*<div className={`container` + ' ' + s.mainContainer}>*/}
                    <div className={`container ${s.mainContainer}`}>
                <div>
                    <p>Hi, there!</p>
                    <h2>My name is</h2>
                    <h1>Denis Aryichuk.</h1>
                    <p>I'm frontend developer</p>
                    <p>
                        You can find more information about me in my{' '}
                        <a
                            rel='noreferrer'
                            target={'_blank'}
                            href={'#'}>
                            CV
                        </a>
                    </p>
                </div>
                <div className={s.photo} />
            </div>
        </section>
    );
};

