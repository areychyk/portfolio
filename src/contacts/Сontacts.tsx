import React from 'react';
import s from './Contacts.module.css'
import container from '../common/styles/Container.module.css'


export const Contacts = () => {


    return (
        <div className={s.contactsBlock}>
            <div className={container.container + ' ' + s.contactsContainer}>
                <h2 className={s.title}>My contacts</h2>
                <form action="" className={s.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text"></textarea>
                </form>

                <button className={s.button}>Send</button>
            </div>


        </div>
    );
};

