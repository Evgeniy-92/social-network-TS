import React from "react";
import s from "./ProfileInfo.module.css";


type StatusPropsType = {
    status: string
}

class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
            </div>
        )
    }
}

export default Status;