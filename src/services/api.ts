import axios from "axios"
import { Todo } from "../types/todos"

const BASE_URL="https://65dc2aca3ea883a1529299f5.mockapi.io/"
const axiosInstance=axios.create({baseURL:BASE_URL})

export const getTodoIds=async ()=>{
    return (await axiosInstance.get<Todo[]>("todo")).data.map(todo=>todo.id)
}

export const getTodo=async(id:number )=>{
   return (await axiosInstance.get<Todo>(`todo/${id}`)).data
}

export const createTodo=async(data:Todo)=>{
    await axiosInstance.post("todo",data)
}