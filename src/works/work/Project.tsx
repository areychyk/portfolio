import React from 'react';
import s from './Project.module.css'
import {WorksType} from "../Works";


export const Project = (props:WorksType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgContainer}>

                <div className={s.referenceToView}>
                    <a href={'#'}>view</a>
                </div>

            </div>

            <span className={s.title}>{props.title}</span>
            <span className={s.description}>{props.description}</span>

        </div>
    );
};

