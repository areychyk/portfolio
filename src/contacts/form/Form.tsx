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
                type='text'
            />
            <textarea className={`${s.textarea} ${s.field}`}></textarea>
            <button className={s.btn}>Send</button>

        </form>
    )
}

export default Form