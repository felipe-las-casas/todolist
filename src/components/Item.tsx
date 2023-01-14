interface ItemProps {
    item: string;
    index: number;
    removeTask: any;
}

import { Button, Li } from '../styles/styles';
import { BsTrashFill} from 'react-icons/bs'

function Item({item, index, removeTask}: ItemProps) {
    return <Li>{item}<Button color='red' onClick={() => removeTask(index)}><BsTrashFill /></Button></Li>
}

export default Item;