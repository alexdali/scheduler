// Core
import React, { PureComponent } from 'react';

// Instruments
import Styles from './styles.m.css';

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

    render () {
        console.log('Task this.props - ', this.props);
        const { id, completed, favorite, message } = this.props;
        return  <li
                  className = { Styles.task }
                  id = { id }
                  //completed = { completed }
                  //favorite = { favorite }
                >{ message }</li>;
    }
}
