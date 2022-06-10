import React from 'react'

export const TaskAddInput = ({
  inputText, 
  setInputText, 
  setTaskList, 
  taskList,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    //カードを追加
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        draggableId: `text-${taskList.length}`,
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
