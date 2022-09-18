import { useState } from 'react'


const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState('')
    const [work,setWork] = useState('')
    const [school, setSchool] = useState('')
    const [leisure, setLeisure] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task")
            return
        }

        onAdd({ text, day, reminder, work,school})

        setText('')
        setDay('')
        setReminder(false)
        setWork(false)
        setSchool(false)
        setLeisure(false)
    }
  return (
    // e.target.value sets text to whatever is typed in
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value) }/>
        </div>
        <div className="form-control">
            <label>Day and Time</label>
            <input type="text" placeholder="Add Day and Time"value={day} onChange={(e) => setDay(e.target.value) } />
        </div>
        <div className="form-control form-control-check">
            <label>Priority</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) } />
        </div>
        <div className="form-control form-control-check">
            <label>Work</label>
            <input type='checkbox' checked={work} value={work} onChange={(e) => setWork(e.currentTarget.checked) } />
        </div>
        <div className="form-control form-control-check">
            <label>School</label>
            <input type='checkbox' checked={school} value={school} onChange={(e) => setSchool(e.currentTarget.checked) } />
        </div> 
        <div className="form-control form-control-check">
            <label>Leisure</label>
            <input type='checkbox' checked={leisure} value={leisure} onChange={(e) => setLeisure(e.currentTarget.checked) } />
        </div>

        <input type="submit" value='Save Task' className='btn btn-block'></input>
        
    </form>
  )
}

export default AddTask;