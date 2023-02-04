import React from 'react';
import s from './Skills.module.css'
import container from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {v1} from "uuid";

export type SkillsType = {
    id: string
    title: string
    description: string

}

export const Skills = () => {
    const skills: Array<SkillsType> = [
        {
            id: v1(),
            title: 'JavaScript',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            id: v1(),
            title: 'TypeScript',
            description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            id: v1(),
            title: 'React',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: v1(),
            title: 'Css',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={container.container + ' ' + s.skillsContainer}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    {skills.map(skill => {
                        return (<Skill
                                key={skill.id}
                                id={skill.id}
                                title={skill.title}
                                description={skill.description}
                            />
                        )

                    })}
                </div>


            </div>


        </div>
    );
};

