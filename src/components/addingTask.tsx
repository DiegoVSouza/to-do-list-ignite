
import styles from './addingTask.module.scss'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from 'react';
import { task } from '../types';
import { ListTask } from './listTask';

export const AddingTask = (): JSX.Element => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState<task[]>(() => {
        const tasks = localStorage.getItem("@tasks:opentasks");
        if (tasks) {
            // return JSON.parse(tasks)
            return []

        }
        return []
    })
    function addTask() {
        if (task.length < 1) return
        const oldTasks = [...tasks]
        const newTask = {
            text: task,
            done: false
        }
        oldTasks.push(newTask)
        setTasks(oldTasks)
        localStorage.setItem("@tasks:opentasks", JSON.stringify(oldTasks))
    }
    return (
        <main>
            <div className={styles.input}>
                <input type="text" placeholder='Adicione uma nova tarefa' onChange={(e) => setTask(e.currentTarget.value)} />
                <button onClick={addTask}>Criar <AiOutlinePlusCircle /></button>
            </div>
            <ListTask tasks={tasks} />
        </main>


    )
}