import React from 'react';
import s from './Contacts.module.scss'

import {Title} from "../common/components/title/Title";
import {Info} from "./info/Info";
import {contacts} from "./contacts.data";
import Form from "./form/Form";


export const Contacts = () => {
    const contactsItems = contacts.map((contact) => {
        return <Info key={contact.link} {...contact} />
    })

    return (
        <section className={s.contact}>
            <div className={`container ${s.container}`}>
               <Title title={'Contacts'}/>
                <div className={s.forms}>
                    <ul className={s.list}>{contactsItems}</ul>
                    <Form />
                </div>
            </div>
        </section>
    )
};

