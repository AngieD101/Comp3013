import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignProperty {
  assignments: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  deleteAssignment: (id: number) => void;
  completeAssignment: (id: number) => void;
}

export function Assignments({assignments,deleteAssignment, completeAssignment}: AssignProperty) {
  const createdCount = assignments.length;
  const completedCount = assignments.filter(a => a.completed).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createdCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {createdCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map(assignment => (
          <Assignment 
            key={assignment.id} 
            {...assignment} 
            deleteAssignment={deleteAssignment}
            completeAssignment={completeAssignment}
            /> 
        ))}
      </div>
    </section>
  );
}
