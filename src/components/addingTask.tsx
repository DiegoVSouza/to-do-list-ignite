
import styles from './addingTask.module.scss'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { task } from '../types';
import { ListTask } from './listTask';
import { HiOutlineTrash } from "react-icons/hi";
export const AddingTask = (): JSX.Element => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState<task[]>(() => {
        const tasks = localStorage.getItem("@tasks:opentasks");
        if (tasks) {
            return JSON.parse(tasks)

        }
        return []
    })

    function addTask() {
        if (task.length < 1) return
        const oldTasks = [...tasks]
        const newTask = {
            id: Math.random() * new Date().getSeconds(),
            text: task,
            done: false
        }
        oldTasks.push(newTask)
        setTasks(oldTasks)
        localStorage.setItem("@tasks:opentasks", JSON.stringify(oldTasks))
        setTask("")
    }

    const handleCheck = (index: number) => {
        const oldTasks = [...tasks]
        if (oldTasks[index].done === true) {

            oldTasks[index].done = false
            setTasks(oldTasks)
            localStorage.setItem("@tasks:opentasks", JSON.stringify(oldTasks))

        } else {
            oldTasks[index].done = true
            setTasks(oldTasks)
            localStorage.setItem("@tasks:opentasks", JSON.stringify(oldTasks))

        }
    }

    const deleteTask = (index: number) => {
        const oldTasks = [...tasks]
        oldTasks.splice(index, 1)
        setTasks(oldTasks)
        localStorage.setItem("@tasks:opentasks", JSON.stringify(oldTasks))
    }

    const ShowTask = (task: task, index: number) => {

        return (
            <section className={styles.showtask} key={task.id}>
                <div className={styles.showtaskdiv} >
                    <input id='checkInput' onChange={() => handleCheck(index)} type="checkbox" defaultChecked={task.done} />
                    <div>
                        <textarea readOnly={true} className={task.done ? styles.checked : ""}>{task.text}</textarea>
                    </div>
                    <HiOutlineTrash onClick={() => deleteTask(index)} />
                </div>
            </section>
        )
    }
    return (
        <main>
            <div className={styles.input}>
                <input type="text" placeholder='Adicione uma nova tarefa' onChange={(e) => setTask(e.currentTarget.value)} value={task} />
                <button onClick={addTask}>Criar <AiOutlinePlusCircle /></button>
            </div>
            <ListTask tasks={tasks} />
            {tasks.map((task, index) => (
                ShowTask(task, index)
            ))}

        </main>


    )
}