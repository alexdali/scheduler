// Core
import React, { PureComponent,  } from 'react';

// Instruments
import Styles from './styles.m.css';
import Checkbox from 'theme/assets/Checkbox';
import Remove from 'theme/assets/Remove';
import Star from 'theme/assets/Star';
import Edit from 'theme/assets/Edit';

export default class Task extends PureComponent {
    state = {
        isTaskEditing: false,
        newTaskMessage: this.props.message,
    }

    _getTaskShape = ({
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
        message = this.props.message,
    }) => ({
        id,
        completed,
        favorite,
        message,
    });

    taskInput = React.createRef();

    _updateTaskAsync = (updateTask) => {
        const { _updateTaskAsync } = this.props; 

        _updateTaskAsync(updateTask);
    }

    _updateNewTaskMessage = () => {
        const { newTaskMessage } = this.state;

        this.setState({

        });
    }

    _submitOnEnter = (event) => {
        const enterKey = event.key === 'Enter';
        const updateTask = this._getTaskShape();
        const { newTaskMessage } = this.state;

        if (enterKey) {
            event.preventDefault();
            this._updateTaskAsync({ ...updateTask, message: newTaskMessage });
        }
    }

    // _removeTaskAsync = () => {
    //     const { _removeTaskAsync, id } = this.props; 

    //     _removeTaskAsync(id);
    // }   

    _setTaskEditingState = () => {
        console.log('_updateEditTask');
        this.taskInput.current.focus();
        this.setState({
            isTaskEditing: true,
        });
    }

    _completeTask = () => {
        const { _completeTask, id } = this.props; 

        _completeTask(id);
    } 

    render () {
        console.log('Task this.props - ', this.props);
        const {
            _removeTaskAsync,
            completed,
            favorite,
            id,
            message,
            created,
            modified,
        } = this.props;
        const thisTask = this._getTaskShape();

        console.log('Task thisTask - ', thisTask);
        const { isTaskEditing, newTaskMessage } = this.state;

        return (
            <li className = { Styles.task } >
                <div className = 'content'>
                    <Checkbox
                        inlineBlock
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._updateTaskAsync({ ...thisTask, completed: true }) }
                    />
                    <span />
                    <input
                        disabled
                        maxLength = { 50 }
                        ref = { this.taskInput }
                        type = 'text'
                        value = { message }
                        onChange = { this._updateNewTaskMessage }
                        onKeyDown = { this._submitOnEnter }
                    />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        inlineBlock
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._updateTaskAsync({ ...thisTask, favorite: true }) }
                    />
                    <Edit
                        inlineBlock
                        checked = { false }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._setTaskEditingState }
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { _removeTaskAsync }
                    />
                </div>
            </li>
        );
    }
}
