import React from 'react'
import { v4 as uuid} from 'uuid';

export const TaskAddInput = ({
  inputText, 
  setInputText, 
  setTaskList, 
  taskList,
}) => {

  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    //カードを追加
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `text-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText('');
  }

  const handleChange = (e) =>{
    setInputText(e.target.value);
    // console.log(inputText);
    console.log(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='add a task'
        className='taskAddInput'
        onChange={handleChange}
        value={inputText}
        />
      </form>
    </div>
  )
}
