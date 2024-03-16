import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTodo } from "../services/mutations";
import {  useTodosIds } from "../services/queries";
import { Todo } from "../types/todos";

export default function Todos() {
  const createTodoMutation = useCreateTodo();
  const todosIdQuery = useTodosIds();
  //   const todosQueries = useTodos(todosIdQuery.data);
  const { register, handleSubmit } = useForm<Todo>();
  // if(todosIdQuery.isPending){
  //     return <span>...ispending</span>
  // }

  // if(todosIdQuery.isError){
  //     return <span>...error</span>
  // }

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  console.log("todosIdQuery.data",todosIdQuery.data)
  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <input placeholder="title" {...register("title")} />
        <br />
        <input placeholder="description" {...register("description")} />
        <br />
        <input type="submit" disabled={createTodoMutation.isPending} value={createTodoMutation.isPending?"creating...":"create todo"} />
      </form>
      {todosIdQuery.fetchStatus}
      {todosIdQuery.status}
      {/* {todosIdQuery.data.map((id) => (
        <p key={id}>{id}</p>
      ))} */}
      {/* <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <p>id : {data?.id}</p>
            <p>title:{data?.title}</p>
            <p>desc: {data?.description}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}
