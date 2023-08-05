import TaskStore from "./Apis/TaskStore";
import TaskGen from "./Component/TaskGen";


let App= ()=>{
    return (
        <TaskStore>
            <TaskGen></TaskGen>
        </TaskStore>
    )
}
export default App;