import { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface AssignProperty {
  addAssignment: (title:string) => void;
}

export function Header({addAssignment}:AssignProperty) {
  const [inputAssignment, setInputAssignment] = useState('');
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAssignment(event.target.value);
  }
  const isEmpty = (inputAssignment.length == 0);

  const createAssignment = () =>{
    if(isEmpty){return};
    addAssignment(inputAssignment);
    setInputAssignment('');
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={createAssignment}>
        <input 
          placeholder="Add a new assignment" 
          type="text" 
          value={inputAssignment}
          onChange={inputChange}
        />
        <button
          disabled={isEmpty}
          style = {{cursor: isEmpty ? 'default' : 'pointer'}}
          onClick={createAssignment}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
