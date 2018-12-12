// Core
import React, { Component } from 'react';

//Components
import Task from 'components/Task';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST'; // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')

const Tasks = [
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
    //const searchTask;

    render () {
        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>
                            Планировщик задач
                        </h1>
                        <form onSubmit = { this._handleFormSubmit }>
                            <textarea
                                placeholder = { `What's on your mind` }
                                value = ''//{ searchTask }
                                // onChange = { this._updateComment }
                                // onKeyPress = { this._submitOnEnter }
                            />
                            <input
                                type = 'submit'
                                value = 'Search'
                            />
                        </form>
                    </header>
                </main>
                <Task />
                <Spinner />
            </section>
        );
    }
}
