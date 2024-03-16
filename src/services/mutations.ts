import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todos";
import { createTodo } from "./api";

export function useCreateTodo(){
    const quryClient=useQueryClient()
    return useMutation({
        mutationFn:(data:Todo)=>createTodo(data),
        onMutate:()=>{
            console.log("run mute")
        },
        onError:()=>{
            console.log("run error")
        },

        onSuccess:()=>{
            console.log("run success")
        },
        onSettled:async(_,error)=>{
          if(error){
            console.log(error)
          }
          else{
            await quryClient.invalidateQueries({queryKey:["todo"]})
          }
        }
    })
}