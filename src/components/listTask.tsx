
import { useEffect, useState } from 'react'

import { task } from '../types';

import styles from './listTask.module.scss'
import Clipboard from '../assets/Clipboard.svg'

interface ListProps {
    tasks: task[]
}
export const ListTask: React.FC<ListProps> = ({ tasks }) => {

    const [undoneTasks, setUndoneTasks] = useState<task[]>()
    const [doneTasks, setDoneTasks] = useState<task[]>()

    useEffect(() => {
        function loadTasks() {
            const doneTasks = tasks.filter(task => task.done === true)
            setDoneTasks(doneTasks)

        }
        loadTasks()
    }, [tasks])



    return (
        <article className={styles.mainlist}>
            <section className={styles.headerlist}>
                <label>Tarefas criadas<div><span>{tasks ? tasks.length : 0}</span></div></label>
                <label>Concluídas <div className={styles.countdiv}><span>{doneTasks ? `${doneTasks.length} de ${tasks.length}` : `0 de ${tasks.length}`}</span></div></label>
            </section>
            <section className={styles.bodylist}>
                {tasks?.length > 0 ?
                    <></>
                    :
                    <div>
                        <img src={Clipboard} alt="" />
                        <label><strong>Você ainda não tem tarefas cadastradas</strong><br />
                            Crie tarefas e organize seus itens a fazer</label>
                    </div>}
            </section>
        </article>
    )
}