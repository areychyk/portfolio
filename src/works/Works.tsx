import React from 'react';
import s from './Works.module.css'
import container from '../common/styles/Container.module.css'
import {Project} from "./work/Project";
import {v1} from "uuid";

export type WorksType = {
    id: string
    title: string
    description: string
    picture:string

}

export const Works = () => {
    const works: Array<WorksType> = [
        {
            id: v1(),
            title: 'Social network',
            description: 'Lorem Ipsum is simply dummy',
            picture:'url'
        },
        {
            id: v1(),
            title: 'Todolist',
            description: 'Lorem Ipsum has been ',
            picture:'url'
        },


    ]

    return (
        <div className={s.worksBlock}>
            <div className={container.container + ' ' + s.worksContainer}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    {works.map(work => {
                        return (<Project
                                key={work.id}
                                id={work.id}
                                title={work.title}
                                description={work.description}
                                picture={work.picture}
                            />
                        )

                    })}
                </div>


            </div>


        </div>
    );
};

