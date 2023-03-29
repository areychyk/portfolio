

import s from './Form.module.scss'

export const Form = () => {

    return (
        <form className={s.form}>
            <input
                className={`${s.field}`}
                type='text'
            />

            <input
                className={`${s.field}`}
                type='email'
            />

            <textarea

                className={`${s.textarea} ${s.field}`}></textarea>

            {/*<Button type={'submit'}>Send</Button>*/}

        </form>
    )
}

export default Form