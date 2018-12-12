// Core
import React, { Component } from 'react';

//Components
import Task from 'components/Task';
import Catcher from 'components/Catcher';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
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
        tasks: staticTasks,
        isSpinning: false,
    }

    render () {
        const searchTask = '';
        const newTask = {};
        const { tasks, isSpinning } = this.state;

        const tasksJSX = tasks.map((task) => {
            return (
                <Catcher key = { task.id }>
                    <Task
                        { ...task }
                        // _likePost = { this._likePost }
                        // _removePost = { this._removePost }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <div>
                            <h1>Планировщик задач</h1>
                        </div>
                        <div>
                            <input
                                type = 'text'
                                value = 'Search'
                            />
                        </div>
                    </header>
                    <div>
                        <input
                            type="text"
                            placeholder = { `Описание новой задачи` }
                            value =  ''
                            onChange = { this._updateComment }
                            onKeyPress = { this._submitOnEnter }
                        />
                    </div>
                    <section>
                        <div>
                            <form onSubmit = { this._handleFormSubmit }>
                                <input
                                    type='text'
                                />
                                <button onClick = {this.onClick}>
                                    Добавить задачу
                                </button>
                            </form>
                            <ul>{tasksJSX}</ul>
                            <Spinner />
                        </div>
                    </section>
                    <footer>
                        <div></div>
                        <div className = {Styles.completeAllTasks}>
                            Все задачи выполнены
                        </div>
                    </footer>
                </main>
            </section>
        );
    }
}
