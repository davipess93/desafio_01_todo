import styles from './EmpityTask.module.css'

import clipboard from '../assets/clipboard.svg'

export function EmpityTask() {
  return (
    <div className={styles.empityTask}>
      <img src={clipboard} alt="" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}