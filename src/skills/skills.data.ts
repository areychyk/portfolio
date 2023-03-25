
import { CgArrowsExchangeV } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { GrTest } from 'react-icons/gr'
import {
    SiJavascript,
    SiJest,
    SiMui,
    SiRedux,
    SiSass,
    SiStorybook,
    SiStyledcomponents,
    SiTypescript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'


const icons={
    react:FaReact,
    redux: SiRedux,
    js: SiJavascript,
    ts: SiTypescript,
    axios: CgArrowsExchangeV,
    styled: SiStyledcomponents,
    jest: SiJest,
    sass: SiSass,
    api: TbApi,
    story: SiStorybook,
    mui: SiMui,
    unit: GrTest,
}

export const skills=[
    {
        skillID:1,
        title:'React',
        Icon:icons.react,
        color:'#61DAFB'
    },
    {
        skillID: 2,
        title: 'Redux',
        Icon: icons.redux,
        color: '#764abc',
    },
    {
        skillID: 3,
        title: 'JavaScript',
        Icon: icons.js,
        color: '#f5de19',
    },
    {
        skillID: 4,
        title: 'TypesScript',
        Icon: icons.ts,
        color: '#007acc',
    },
    {
        skillID: 5,
        title: 'Axios',
        Icon: icons.axios,
        color: '#671ddf',
    },
    {
        skillID: 6,
        title: 'Jest',
        Icon: icons.jest,
        color: '#c63d14',
    },
    {
        skillID: 7,
        title: 'SASS-SCSS',
        Icon: icons.sass,
        color: '#bf4080',
    },
    {
        skillID: 8,
        title: 'Rest-API',
        Icon: icons.api,
        color: '#f9004d',
    },
    {
        skillID: 9,
        title: 'Styled-Components',
        Icon: icons.styled,
        color: '#ffcebf',
    },
    {
        skillID: 10,
        title: 'StoryBook',
        Icon: icons.story,
        color: '#FF4785',
    },
    {
        skillID: 11,
        title: 'MUI',
        Icon: icons.mui,
        color: '#007FFF',
    },
    {
        skillID: 12,
        title: 'Unit-tests',
        Icon: icons.unit,
        color: '#66bb6a',
    },
]