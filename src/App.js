import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Pomodoro from './components/Pomodoro'


const App = () => { 
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
            work: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
            work: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
            work: true,
        }
        // cant do tasks.push() 
    ])

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      // ... brings all the things in tasks
      setTasks([...tasks, newTask])

    }
    // delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }

    // reminder on/off
    const toggleReminder = (id) => {
      console.log(id)
    } 
    
  return (
   
      <div className="container">
        <Header  onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks :)'}
       
        <Footer />
    </div>
  
  );
}

export default App;
