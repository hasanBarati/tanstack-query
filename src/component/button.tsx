
export default function Button ({size,color,text,...props}){
    return(
      <button style={{
          fontSize:size==="small"?"8px":"20px",
          backgroundColor:color,
          width:"200px",
          height:"100px"
      }}>
         {text}
      </button>
    )
 }
 
 export const RedButton=props=>{
     return <Button {...props} color={"red"}/>
 }