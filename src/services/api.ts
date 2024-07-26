import axios from "axios";
import { Todo } from "../types/todos";
import { Project } from "../types/project";

const BASE_URL = "https://65dc2aca3ea883a1529299f5.mockapi.io/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodoIds = async () => {
  return (await axiosInstance.get<Todo[]>("todo")).data;
};
export const getTodo = async (id: number) => {
  return (await axiosInstance.get<Todo>(`todo/${id}`)).data;
};

export const createTodo = async (data: Todo) => {
  await axiosInstance.post("todo", data);
};
export const updateTodo = async (data: Todo) => {
  await axiosInstance.put(`todo/${data.id}`, data);
};
export const deleteTodo = async (id: number) => {
  await axiosInstance.delete(`todo/${id}`);
};
export const getProjects = async (page = 1) => {
 return (await axiosInstance.get<Project[]>(`projects?_page=${page}&_limit=3`)).data;
};
