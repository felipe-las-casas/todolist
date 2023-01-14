import Item from "./Item";

interface IItems {
    list: string[];
    removeTask: any;
}

function Items({ list, removeTask }: IItems) {
    return (
        <ol>
        {
            list.map((item, index) => <Item key = {index} 
            item={item} index={index} removeTask={removeTask} />)
        }
        </ol>
    )
}

export default Items;