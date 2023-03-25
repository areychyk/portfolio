import React from 'react';
import s from './Works.module.scss'
import container from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {v1} from "uuid";
import {Title} from "../common/components/title/Title";

import todolist from '../assets/image/todolist.jpg'
import social_network from '../assets/image/social-network.jpg'
import blogger_platform from '../assets/image/blogger_platform.jpg'
import counter from '../assets/image/counter.jpg'

export type WorksType = {
    id: string
    title: string
    description: string
    picture: string

}
// backgroundImage: 'url(' + '../assets/image/todolist.jpg' + ')',

export const Works = () => {
    const works: Array<WorksType> = [
        {
            id: v1(),
            title: 'Social network',
            description: 'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy',
            picture:`url(${social_network})`

        },
        {
            id: v1(),
            title: 'Todolist',
            description: 'Lorem Ipsum has been Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy',
            picture:`url(${todolist})`
        },
        {
            id: v1(),
            title: 'Blogger platform',
            description: 'Lorem Ipsum has been Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy',
            picture:`url(${blogger_platform})`
        },
        {
            id: v1(),
            title: 'Counter',
            description: 'Lorem Ipsum has been Lorem Ipsum is Lorem Ipsum has been Lorem Ipsum is  simply dummy Lorem Ipsum is simply dummy',
            picture:`url(${counter})`
        },





    ]

    // console.log(typeof works[0].picture)

    return (
        <div className={s.worksBlock}>
            <div className={container.container + ' ' + s.worksContainer}>
                <Title title={'Works'}/>

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

