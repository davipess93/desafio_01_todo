import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './CreateNewTask.module.css'

interface CreateNewTaskProps {
  onCreateNewTask: (newTaskChanged: string) => void
}

export function CreateNewTask({ onCreateNewTask }: CreateNewTaskProps) {

  const [newTask, setNewTask] = useState('');

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateNewTask(newTask)
    setNewTask('')
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleCreateNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  return(
    <form onSubmit={handleNewTask} className={styles.newTask}>
      <input
        onChange={handleCreateNewTaskChange}
        value={newTask}
        onInvalid={handleCreateNewTaskInvalid}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />

      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}