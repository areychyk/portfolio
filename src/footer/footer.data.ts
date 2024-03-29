import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

const icons = {
    github: BsGithub,
    codewars: SiCodewars,
    telegram: BsTelegram,
    link: BsLinkedin,
}

export const footer = [
    {
        id: 1,
        Icon: icons.codewars,
        link: 'https://www.codewars.com/users/ariiychykDenis',
        fill: '#bb432c',
        prefix: 'cd',
    },
    {
        id: 2,
        Icon: icons.github,
        link: 'https://github.com/areychyk',
        fill: '#000000',
        prefix: 'git',
    },
    {
        id: 3,
        Icon: icons.telegram,
        link: 'https://t.me/ariiychyk',
        fill: '#0088cc',
        prefix: 'tg',
    },
    {
        id: 4,
        Icon: icons.link,
        link: 'https://www.linkedin.com/in/denis-ariiychyk-291a71244/',
        fill: '#0077b5',
        prefix: 'link',
    },
]