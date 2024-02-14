import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

interface AssignProperty {
  id: number;
  title: string;
  completed: boolean;
  deleteAssignment: (id: number) => void;
  completeAssignment: (id: number) => void;
}

export function Assignment({id, title, completed, deleteAssignment, completeAssignment}: AssignProperty) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={()=>completeAssignment(id)}>
        {completed ?(<BsCheckCircleFill />):(<div />)}
      </button>

      <p className={completed ? styles.textCompleted : ''}>
        {title}
      </p>

      <button className={styles.deleteButton} onClick={()=>deleteAssignment(id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
