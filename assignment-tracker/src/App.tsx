import { useState } from 'react';
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

interface Assignment {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  
  const addAssignment = (title:string) => {
    const newAssignment = {
      id: Date.now(),
      title,
      completed: false,
    };
    setAssignments(prevAssignments => [...prevAssignments, newAssignment]);
  };
  
  const deleteAssignment = (id:number) =>{
    setAssignments(prevAssignments => prevAssignments.filter(a => a.id != id));
  }

  const completeAssignment = (id:number) => {
    setAssignments(prevAssignments =>  
      prevAssignments.map(assignment => assignment.id === id ? 
        { ...assignment, completed: !assignment.completed } : assignment)
    );
  }
  return (
    <>
      <Header addAssignment={addAssignment}/>
      <Assignments 
        assignments={assignments}
        deleteAssignment={deleteAssignment}
        completeAssignment={completeAssignment}
      />
    </>
  );
}

export default App;
