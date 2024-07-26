import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "../services/mutations";
import { useTodosIds } from "../services/queries";
import { Todo } from "../types/todos";

export default function Todos() {
  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo()
  const todosIdQuery = useTodosIds();
  //   const todosQueries = useTodos(todosIdQuery.data);
  const { register, handleSubmit } = useForm<Todo>();
  if (todosIdQuery.isPending) {
    return <span>...ispending</span>;
  }

  if (todosIdQuery.isError) {
    return <span>...error</span>;
  }

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  const handleMarkAsDone: SubmitHandler<Todo> = (data) => {
    updateTodoMutation.mutate({ ...data, checked: true });
  };
  const handleDelete=(id:number)=>{
    deleteTodoMutation.mutate(id)
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <input placeholder="title" {...register("title")} />
        <br />
        <input placeholder="description" {...register("description")} />
        <br />
        <input
          type="submit"
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? "creating..." : "create todo"}
        />
      </form>
      {/* {todosIdQuery.fetchStatus}
      {todosIdQuery.status} */}
      {/* {todosIdQuery?.data.map((id) => (
        <p key={id}>{id}</p>
      ))} */}

      <ul>
        {todosIdQuery?.data.map((item) => (
          <li key={item?.id}>
            <p>id : {item?.id}</p>
            <p>title:{item?.title}</p>
            <p>desc: {item?.description}</p>
            <button disabled={item.checked} onClick={()=>handleMarkAsDone(item)}>{item.checked ?"done":"Mark as done"}</button>
            <button onClick={()=>handleDelete(item.id!)}>delete</button>
          </li>
        ))}
      </ul>
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
