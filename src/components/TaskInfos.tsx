import styles from './TaskInfos.module.css';

interface TaskInfosProps {
  quantity: number
  accumulator: number
}

export function TaskInfos({ quantity, accumulator }: TaskInfosProps) {
  return (
    <div className={styles.info}>
      <div>
        <span>Tarefas criadas</span><span>{quantity}</span>
      </div>
      <div>
        <span>Concluídas</span><span>{`${accumulator} de ${quantity}`}</span>
      </div>
    </div>
  )
}