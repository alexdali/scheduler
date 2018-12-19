// Core
import React, { Component } from 'react';

//Components
import Task from 'components/Task';
import Catcher from 'components/Catcher';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import Checkbox from 'theme/assets/Checkbox';
import { BaseTaskModel } from 'instruments/';
import { api } from '../../REST'; // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')

export default class Scheduler extends Component {
    state = {
        tasks: [
            {
                id:        '1',
                completed: false,
                favorite: false,
                message: 'first',
            },
            {
                id: '2',
                completed: false,
                favorite: false,
                message: 'Second',
            }
        ],
        newTaskMessage:  '',
        tasksFilter:     '',
        isTasksFetching: false,
    };

    _fetchTasksAsync = () => {
        console.log('_fetchTasksAsync');
    }

    _updateTasksFilter = () => {
        console.log('_updateTasksFilter');
    }

    _getAllCompleted = () => {
        console.log('_getAllCompleted');
    }

    _setTasksFetchingState = (state) => {
        this.setState({
            isTasksFetching: state,
        });
    }

    _onClick = (event) => {
        event.preventDefault();
        this._createTaskAsync();
    }

    _handleFormSubmit = (event) => {
        event.preventDefault();
        this._createTaskAsync();
    }

    _createTaskAsync = () => {
        console.log('_createTaskAsync');
        const { newTaskMessage } = this.state;
        //const newTask = new BaseTaskModel(void 0, false, false, newTaskMessage);

        //console.log('_createTaskAsync: newTaskMessage', newTaskMessage);
        //console.log('_createTaskAsync: newTask', newTask);
        if (!newTaskMessage) {
            return null;
        }

        this._setTasksFetchingState(true);
        this.setState(({ tasks }) => (
            {
                tasks:           [...tasks, new BaseTaskModel(void 0, false, false, newTaskMessage)],
                newTaskMessage:  '',
                isTasksFetching: false,
            }
        ));
    }

    _updateNewTaskMessage = (event) => {
        //console.log('_updateNewTaskMessage: event.target.value', event.target.value);

        this.setState({
            newTaskMessage: event.target.value,
        });
    }

    _onChangeSearch = (event) => {
        console.log('_onChangeSearch', event);
    }

    _updateTaskAsync = (updatedTask) => {
        console.log('_updateTaskAsync', updatedTask);
        this._setTasksFetchingState(true);
        this.setState(({ tasks }) => (
            {
                tasks: tasks.map((task) => {
                    if (task.id === updatedTask.id) {
                        return updatedTask;
                    }

                    return task;
                }),
            }
        ));
    }

    // __completeTask = (id) => {
    //     console.log('__completeTask', id);
    // }

    _removeTaskAsync = (id) => {
        console.log('_removeTaskAsync', id);
    }

    _completeAllTasksAsync= () => {
        console.log('_completeAllTasksAsync');
    }
    // created:  "2018-06-13T19:23:33.028Z",
    //     modified: "2018-06-21T18:43:41.752Z",

    render () {
        const { tasks, isTasksFetching, newTaskMessage } = this.state;

        const tasksJSX = tasks.map((task) => {
            //console.log('taskJSX');
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
                <Spinner isSpinning = { isTasksFetching } />
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
                                value = { newTaskMessage }
                                onChange = { this._updateNewTaskMessage }
                            />
                            <button onClick = { this._onClick }>Добавить задачу</button>
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
                            onClick = { this._completeAllTasksAsync }
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
