import React from 'react';
import s from './Project.module.scss'


export type ProjectPropsType = {
    id: string
    title: string
    description: string
    picture: string

}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgContainer} style={{backgroundImage: props.picture}}>
                <div className={s.corner}>
                    <a className={s.referenceToView} href={'#'}>view</a>
                    <div className={s.arrow}></div>
                </div>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <p className={s.description}>{props.description}</p>

        </div>
    );
};

