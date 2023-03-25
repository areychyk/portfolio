import React from 'react';
import s from './Skills.module.css'
import container from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {skills} from "./skills.data";



export const Skills = () => {

    const slillsItems=skills.map(skill=>{
       return <Skill key={skill.skillID} skill={skill}/>
    })

    return (
        <section className={s.skillsBlock}>
            <div className={container.container + ' ' + s.skillsContainer}>
                <Title title={'Skills'}/>
                <ul className={s.skills}>{slillsItems}</ul>


            </div>


        </section>
    );
};

