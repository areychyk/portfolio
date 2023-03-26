import React from 'react';
import s from './Skill.module.scss'
import {IconType} from "react-icons";


type SkillType={
    skillID:number
    title:string
    Icon:IconType
    color:string
}

type SkillPropsType={
    skill:SkillType
}



export const Skill = (props:SkillPropsType) => {
    const {Icon,color,title}=props.skill
    return (
        <li className={s.skillBlock}>
            <div className={s.inner}>
                <div className={s.square}>
                    <Icon size={50} color={color} />
                </div>
                <h3 className={s.title}>{title}</h3>
            </div>

        </li>
    );
};





