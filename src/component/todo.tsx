import { useTodos, useTodosIds } from "../services/queries"

export default function Todo() {
    const todosIdQuery=useTodosIds()
    const todosQueries=useTodos(todosIdQuery.data)
    if(todosIdQuery.isPending){
        return <span>...ispending</span>
    }

    if(todosIdQuery.isError){
        return <span>...error</span>
    }
    return (
        <>
          {/* {todosIdQuery.fetchStatus}
          {todosIdQuery.status}
            {todosIdQuery.data.map(id=>(
                <p key={id}>{id}</p>
            ))} */}
            <ul>
            {todosQueries.map(({data})=>(
               <li key={data?.id}>
                 <p>id : {data?.id}</p>
                 <p>title:{data?.title}</p>
                 <p>desc: {data?.description}</p>
               </li>
))}
            </ul>
            
        </>
    )
}
