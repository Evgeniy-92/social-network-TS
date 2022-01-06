import s from './TextField.module.css'

export const TextFieldMe = (props: any) => {
    return (
        <div className={props.error && s.error}>
            <input {...props}/>
        </div>
    )
}