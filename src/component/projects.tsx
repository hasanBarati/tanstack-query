import { useState } from "react";
import { useProject } from "../services/queries";

export default function Projects() {
  const [page, setPage] = useState(1);
  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useProject(page);
  return (
    <div>
      {isPending ? (
        <div>...loading</div>
      ) : isError ? (
        <>{error.message}</>
      ) : (
        data.map((project) => <p key={project.id}>{project.name}</p>)
      )}
      <span>CurrentPage: {page}</span>
      <button onClick={()=>setPage((old:number)=>Math.max(old-1,0))}>Previous Page</button>
      <button onClick={()=>{
        if(!isPlaceholderData){
            setPage((old:number)=>old+1)
        }
      }}
       disabled={isPlaceholderData}
      >Next page</button>
      {isFetching ? <span>...islOading</span>:null}
    </div>
  );
}
