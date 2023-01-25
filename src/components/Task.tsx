import * as Checkbox  from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export interface TaskProps {
  id: string
  content: string
  checked: boolean
  onDeleteTask: (id: string) => void
  onToggleCheckTask: (id: string) => void
}

export function Task({ id, content, checked, onDeleteTask, onToggleCheckTask }: TaskProps) {
  
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleToggleCheckTask() {
    onToggleCheckTask(id)
  }

  return(
    <div className={styles.task}>
      
      <div>
        <div>
          <Checkbox.Root
            onCheckedChange={handleToggleCheckTask}
            className={styles.checkTask}
          >
            <Checkbox.Indicator>
              <Check className={styles.checkedTask} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        
        <p className={ checked ? styles.checked : '' }>{content}</p>
      </div>

      <div>
        <button onClick={handleDeleteTask} className={styles.btnDelete}>
          <Trash />
        </button>
      </div>

    </div>
  )
}