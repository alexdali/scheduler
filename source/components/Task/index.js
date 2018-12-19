// Core
import React, { PureComponent } from 'react';

// Instruments
import Styles from './styles.m.css';
import Checkbox from 'theme/assets/Checkbox';
import Remove from 'theme/assets/Remove';
import Star from 'theme/assets/Star';
import Edit from 'theme/assets/Edit';

export default class Task extends PureComponent {
    state = {
        created:  "2018-06-13T19:23:33.028Z",
        modified: "2018-06-21T18:43:41.752Z",
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

    // _updateTaskAsync = () => {
    //     const { _updateTaskAsync, id } = this.props; 

    //     _updateTaskAsync(id);
    // }

    // _removeTaskAsync = () => {
    //     const { _removeTaskAsync, id } = this.props; 

    //     _removeTaskAsync(id);
    // }   

    _completeTask = () => {
        const { _completeTask, id } = this.props; 

        _completeTask(id);
    } 

    render () {
        console.log('Task this.props - ', this.props);
        const {
            _removeTaskAsync,
            _updateTaskAsync,
            completed,
            favorite,
            id,
            message
        } = this.props;

        const { created, modified } = this.state;

        return (
            <li className = { Styles.task } >
                <div className = 'content'>
                    <Checkbox
                        inlineBlock
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { _updateTaskAsync }
                    />
                    <span />
                    <input
                        disabled
                        maxLength = { 50 }
                        type = 'text'
                        value = { message }
                        onChange = { _updateTaskAsync }
                        onKeyDown = { _updateTaskAsync }
                    />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        inlineBlock
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { _updateTaskAsync }
                    />
                    <Edit
                        inlineBlock
                        checked = { false }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { _updateTaskAsync }
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
