import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todos";
import { createTodo } from "./api";

export function useCreateTodo(){
    return useMutation({
        mutationFn:(data:Todo)=>createTodo(data)
    })
}