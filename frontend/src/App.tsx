import React from 'react';
import { useState } from 'react';

import * as C from './App.styles'
import { Item } from './types/item'
import { CardItem } from './components/CardItem';
import { Addtask } from './components/AddTask';

const App = () => {

  const [ListTask, setTask] = useState<Item[]>([
    { id: 1, name: "comprar pão", done: false },
    { id: 2, name: "vender leite", done: true }
  ])


  const ManageTask = (newTask: string) => {
    let newList = [...ListTask]
    newList.push({
      id: ListTask.length + 1,
      name: newTask,
      done: false
    })
    setTask(newList)
  }


  const changeStaus = (id: number) => {
    let nlt = [...ListTask]
    for (let i in nlt) {
      if (nlt[i].id === id) {
        if (nlt[i].done) nlt[i].done = false
        else nlt[i].done = true
      }
    }
    console.log(nlt)
    setTask(nlt)
  }
  
  return (
    <C.Container>
      <C.Area>
        <C.Header>Your List of Task</C.Header>

        <Addtask onEnter={ManageTask} />
        {ListTask.map((item, index) => {
          return (
            <CardItem
              key={index}
              item={item}
              onChange={changeStaus}
            />
          )
        })}

      </C.Area>
    </C.Container>
  );
}


export default App;
