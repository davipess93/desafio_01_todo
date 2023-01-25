import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { CreateNewTask } from './components/CreateNewTask'
import { TaskInfos } from './components/TaskInfos'
import { EmpityTask } from './components/EmpityTask'
import { Task } from './components/Task'

import './global.css'

import styles from './App.module.css'

interface Task {
  id: string
  content: string
  checked: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function createTask(newTaskChanged: string) {
    const task = {
      id: uuidv4(),
      content: newTaskChanged,
      checked: false
    }

    setTasks([...tasks, task])
  }

  function deleteComment(taskId: string) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    })

    setTasks(taskWithoutDeletedOne)
  }

  function toggleCheckTask(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = {
          id: task.id,
          content: task.content,
          checked: !task.checked
        }

        return updatedTask
      } else {
        return task
      }
    })

    setTasks(updatedTasks);    
  }

  const completedTask = tasks.reduce((accumulator, task) => {
    if(task.checked) {
      return accumulator + 1
    }

    return accumulator
  }, 0)

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <main>
          
          <CreateNewTask
            onCreateNewTask={createTask}
          />

          <div>
            
            <TaskInfos
              quantity={tasks.length}
              accumulator={completedTask}
            />
            
            {
              (!tasks.length) ? 
                <EmpityTask /> 
                : 
                tasks.map(task => ( 
                  <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    checked={task.checked}
                    onDeleteTask={deleteComment}
                    onToggleCheckTask={toggleCheckTask}
                  /> 
                ))
            }

          </div>

        </main>
      </div>
    </div>
  )
}

export default App
