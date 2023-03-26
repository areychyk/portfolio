import React from 'react';
import s from './Contacts.module.css'

import {Title} from "../common/components/title/Title";


export const Contacts = () => {


    return (
        <div className={s.contactsBlock}>
            <div className={`container` + ' ' + s.contactsContainer}>
                {/*<h2 className={s.title}>My contacts</h2>*/}
                <Title title={'Contacts'}/>
                <form action="" className={s.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text"></textarea>
                    <button type={'submit'} className={s.button}>Send</button>
                </form>


            </div>


        </div>
    );
};

