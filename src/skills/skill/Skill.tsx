import React from 'react';
import s from './Skill.module.css'
import {SkillsType} from "../Skills";


export const Skill = (props:SkillsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    );
};

