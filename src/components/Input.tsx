import { IoIosAdd } from 'react-icons/io';
import { Button, InputStyle } from '../styles/styles';

function Input({handleTask, task, addTask}: any) {
    return (
        <div>
            <InputStyle placeholder='Type something to do...' type="text" onChange={handleTask} value={task} />
            <Button color='#00CC00' onClick={addTask}><IoIosAdd /></Button>
        </div>         
    )
}

export default Input;