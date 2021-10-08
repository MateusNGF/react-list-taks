import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

export const Addtask = ({ onEnter }: { onEnter: (newTask: string) => void }) => {
    const [newTask, setNewTask] = useState('')


    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && newTask !== '') {
            onEnter(newTask)
            setNewTask('')
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Add your new task"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}