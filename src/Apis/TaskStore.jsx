import { createContext, useState} from "react";
const Task = createContext();



let TaskStore = (props) => {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [id,setId]=useState(0);
    
    // new Task Creation
    const handleCreate = (e) => {
        e.preventDefault();
        if(!edit){
            if (e.target[0].value.length !== 0)
            setData([...data, { task: e.target[0].value, id: Math.random() * 100000 }])
            e.target[0].value = "";
        }
       
    };

    // Task Deletion
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this permanently?"))
            setData(data.filter((value) => value.id !== id))
    };

    // Task Edition
    const handleEdit = (id, ref) => {
        setEdit(true);
        ref.current.value = data.filter(value => value.id === id)[0].task;
        setId(id);
        
    };

    const handleSave=(ref)=>{
        setData(data.map(value=>{
            if(value.id===id){
                value.task=ref.current.value; 
                ref.current.value="";
            }
           return value;
        }))
        setEdit(false)
    }



    return (
        <Task.Provider value={{ data, handleCreate, handleDelete, handleEdit,handleSave,edit }}>
            {props.children}
        </Task.Provider>
    )
}

export default TaskStore;
export { Task };