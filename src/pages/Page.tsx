import { useState } from 'react'
import Input from '../components/Input'
import Items from '../components/Items';
import { Content, Title } from '../styles/styles'

function Page() {
  const [list, setList] = useState<string[]>(['Run in the morning', 'Drink coffee']);
  const [task, setTask] = useState('');

  function handleTask(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task !== '') {
      setList([...list, task]);
      setTask('');
    }
  }

  function removeTask(index: number) { 
    setList(list.filter((_item, i)=> i !== index));
  }

  return (
    <Content>
      <Title>TO DO LIST</Title>
      <Input handleTask={handleTask} 
      addTask={addTask} task={task}/>
      <Items list={list} removeTask={removeTask} />
    </Content>
  )
}   

export default Page;