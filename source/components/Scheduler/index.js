// Core
import React, { Component } from 'react';

//Components
import Task from 'components/Task';
import Catcher from 'components/Catcher';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import Checkbox from 'theme/assets/Checkbox';
import { api } from '../../REST'; // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')

const staticTasks = [
    {
        id: 1,
        completed: false,
        favorite: false,
        message: 'first',
    }, 
    {
        id: 2,
        completed: false,
        favorite: false,
        message: 'Second',
    }, 
    {
        id: 3,
        completed: false,
        favorite: false,
        message: 'Thirty',
    }, 
    {
        id: 4,
        completed: false,
        favorite: false,
        message: 'Fourty',
    }, 
];

export default class Scheduler extends Component {
    state = {
        tasks:          staticTasks,
        isSpinning:     true,
        newTaskMessage: '',
        searchTask:     '',
    };

    _onClick = (event) => {
        console.log('_onClick', event);
    }

    _handleFormSubmit = (event) => {
        console.log('_handleFormSubmit', event);
    }

    _onChangeNewTask = (event) => {
        console.log('_onChangeNewTask', event);
    }

    _onChangeSearch = (event) => {
        console.log('_onChangeSearch', event);
    }

    _updateTaskAsync = (id) => {
        console.log('_updateTaskAsync', id);
    }

    __completeTask = (id) => {
        console.log('__completeTask', id);
    }

    _removeTaskAsync = (id) => {
        console.log('_removeTaskAsync', id);
    }

    render () {
        //const searchTask = '';
        // const newTaskMessage = '';
        const { searchTask, newTaskMessage, tasks, isSpinning } = this.state;

        const tasksJSX = tasks.map((task) => {
            return (
                <Catcher key = { task.id }>
                    <Task
                        { ...task }
                        _removeTaskAsync = { this._removeTaskAsync }
                        _updateTaskAsync = { this._updateTaskAsync }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.scheduler } >
                <Spinner isSpinning = { isSpinning } >
                    <div className = { Styles.spinner } />
                </Spinner>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input
                            placeholder = 'Поиск'
                            type = 'search'
                            value = ''
                            onChange = { this._onChangeSearch }
                        />
                    </header>
                    <section>
                        <form onSubmit = { this._handleFormSubmit }>
                            <input
                                className = { Styles.createTask } 
                                maxLength = { 50 }
                                placeholder = 'Описaние моей новой задачи'
                                type = 'text'
                                value = ''
                                onChange = { this._onChangeNewTask }
                            />
                            <button>Добавить задачу</button>
                        </form>
                        <div className = { Styles.overlay } >
                            <ul>
                                <div>
                                    { tasksJSX }
                                    {/* <Task
                                        _removeTaskAsync = { this._removeTaskAsync }
                                        _updateTaskAsync = { this._updateTaskAsync }
                                        completed = { false }
                                        favorite = { false }
                                        id = '123'
                                        key = '.$123'
                                        message = 'Выполнить важную задачу'
                                    /> */}
                                </div>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox
                            checked = { false }
                            color1 = '#363636'
                            color2 = '#fff'
                            onClick = { this.__completeTask }
                        />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
