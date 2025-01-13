import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api" 
import { ListItem } from "./ListItem";


export function TasksList() {

    const [listTasks, setListTasks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function loadTasks (){
          try {
            const res = await getAllTasks()
            setListTasks(res.data)
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false)
          }
        }
        loadTasks()
    },[])

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error}</p>;

    return (
      <div className="my-3">
          <h3 className="font-bold my-2">Tasks List</h3>
            <div  className="grid grid-cols-3 gap-3">
                {listTasks.map((task) => (

                  <ListItem key={task.id} task={task} />
                ))}
            </div>
      </div>
  );

}