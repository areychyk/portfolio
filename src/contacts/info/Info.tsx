import { FC, memo } from 'react'
import { IconType } from 'react-icons'

type InfoType =  {
    link: string
    Icon: IconType
}

export const Info: FC<InfoType> = memo(({ Icon, link }) => {
    const currentLink = link.includes('@gmail.com') ? 'mailto:' : link.includes('+375') ? 'tel:' : ''
    return (
        <li key={link}>
            <a rel='noreferrer' target={'_blank'} href={`${currentLink}${link}`}>
                <Icon size={30} />
                <span>{link.includes('google') ? 'Belarus, Minsk' : link.includes('drive') ? 'My CV' : link}</span>
            </a>
        </li>
    )
})