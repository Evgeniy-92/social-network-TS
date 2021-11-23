import React, { ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";


type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false,
        localStatus: this.props.status
    }

    changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            localStatus: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if(this.state.localStatus === '') {

        }
        this.props.updateStatus(this.state.localStatus)
    }
    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({localStatus: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input
                        onChange={this.changeStatusHandler}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        type="text"
                        value={this.state.localStatus}/>
                    : <span
                        onDoubleClick={this.activateEditMode}>{this.props.status || 'Status'}</span>
                }
            </div>
        )
    }
}

export default Status;