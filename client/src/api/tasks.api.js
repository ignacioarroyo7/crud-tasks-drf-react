import axios from 'axios'


const tasksApi = axios.create({
    baseURL: 'http://backend:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = ()=> tasksApi.get()

export const getTask = (id)=> tasksApi.get(`/${id}/`)

export const createTask = (task) => tasksApi.post("/",task)

export const editTask = (id,task) => tasksApi.put(`/${id}/`,task)

export const deleteTask = (id) => tasksApi.delete(`/${id}/`)

