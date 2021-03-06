import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export function LoginForm(props: InjectedFormProps<FormDataType>) {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login1'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export function Login1() {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}