// Core
import React, { PureComponent } from 'react';

// Components
import Checkbox from 'components/Checkbox';
// Instruments
import Styles from './styles.m.css';
import { withSvg } from 'instruments/withSvg';

export default class Task extends PureComponent {
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

    _onChangeTask = () => {
        const { _onChangeTask, id } = this.props; 

        _onChangeTask(id);
    }

    _completeTask = () => {
        const { _completeTask, id } = this.props; 

        _completeTask(id);
    }

    render () {
        //console.log('Task this.props - ', this.props);
        const { id, completed, favorite, message } = this.props;
        //const objectTask = this._getTaskShape();
        return  <li
                  className = { Styles.task }
                  id = { id }
                  //completed = { completed }
                  //favorite = { favorite }
                >
                    <div className = {Styles.content}>
                        {/* <Checkbox
                            inlineBlock
                            checked = { completed }
                            className = { Styles.toggleTaskCompletedState }
                            color1 = '#3B8EF3'
                            color2 = '#FFF'
                            onClick = { this._completeTask }
                        /> */}

                        <span>
                            <input
                                type = 'text'
                                value = { message }
                                onChange = { this._onChangeTask }
                            />
                        </span>
                    </div>
                </li>;
    }
}
