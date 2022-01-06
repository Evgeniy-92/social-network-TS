import {useFormik} from "formik";
import React from "react";
import {FormikErrorType, LoginParamsType} from "../api/api";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {loginTC} from "../redux/auth-reducer";
import {TextFieldMe} from "../components/common/TextField/TextField";
import {Redirect} from "react-router-dom";

type LoginPropsType ={
    loginTC: (data: LoginParamsType) => void
}


const validate = (values: FormikErrorType) => {
    const errors: Partial<FormikErrorType> = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid login address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 3) {
        errors.password = 'Invalid password';
    }
    return errors
}

export const LoginFormik = (props: LoginPropsType) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: values => {
            console.log(values)
            props.loginTC(values)
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextFieldMe
                        type="email"
                        placeholder="login"
                        {...formik.getFieldProps("email")}
                        error={formik.touched.email && formik.errors.email && true}
                    />
                    {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                </div>

                <div>
                    <TextFieldMe
                        type="password"
                        placeholder="password"
                        {...formik.getFieldProps("password")}
                        error={formik.touched.password && formik.errors.password && true}
                    />
                    {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                </div>

                <div>
                    <input type="checkbox"
                           placeholder="rememberMe" {...formik.getFieldProps("rememberMe")}/>
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

function LoginContainer(props: PropsType) {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormik loginTC={props.loginTC}/>
        </div>
    );
}

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType ={
    loginTC: (data: LoginParamsType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC}) (LoginContainer);