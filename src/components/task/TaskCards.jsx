import React, {useState} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { TaskCard } from './TaskCard';

export default function TaskCards() {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: 0,
    draggableId: 0,
  }]);
  return (
    <div className='taskCardsArea'>
       {taskCardsList.map((taskCardList) => (
        <TaskCard key={taskCardList.id}/>
       ))}
        <AddTaskCardButton 
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}/>
    </div>
  )
}
