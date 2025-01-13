import { useForm } from 'react-hook-form'
import { createTask, deleteTask, editTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from "react-hot-toast"

export function TaskFormPage() {
  const  { register, handleSubmit, formState: {errors} , setValue} = useForm()

  const onSubmit = handleSubmit(async data => {
    if(params.id){
      await editTask(params.id,data)
      toast.success('¡Tarea editada con éxito!',{
        position: "top-right",
        style:{
          background:"#101010",
          color:"#fff",
        }
      })
    } else {
      await createTask(data)
      toast.success('¡Tarea creada con éxito!',{
        position: "top-right",
        style:{
          background:"#101010",
          color:"#fff",
        }
      })
    }
    navigate("/tasks")
  })
  const navigate = useNavigate()
  const params = useParams()



  useEffect(()=>{
    async function obtenerTaskEdit(){
        if(params.id){
          const task = await getTask(params.id)
          setValue('title',task.data.title)
          setValue('descripcion',task.data.descripcion)
        }
    }
    obtenerTaskEdit()
  },[])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
          <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="text" placeholder="title" {...register("title", {required : true})}/>
          {errors.title && <span>This fields is required</span>}
          <textarea className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' rows={3} placeholder="descripcion" {...register("descripcion", {required : true})}/>
          {errors.descripcion && <span>This fields is required</span>}
          <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3' 
          >Save</button>
      </form>
      {params.id && (
        <div className='flex justify-end'>
          <button
            className='bg-red-500 p-3 rounded-lg block w-48 mt-3'
            onClick={async ()=>{
              const acepted = window.confirm('Estás seguro?')
              if (acepted){
                await deleteTask(params.id)
                toast.success('¡Tarea eliminada con éxito!',{
                  position: "top-right",
                  style:{
                    background:"#101010",
                    color:"#fff",
                  }
                })
                navigate('/tasks')
              }
            }}
          >Delete
          </button>
        </div>
      )}
    </div>
  )
}
