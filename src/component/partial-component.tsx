

export  const partialComponent=(Components,partialProps)=> {
    
   return (props)=>{
    return <Components {...partialProps} {...props}/>
   
   }
 
}


export const Button =({size,color,text,...props})=>{
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
 
 export const RedButton=partialComponent(Button,{color:"green"})
 export const RedButton2=partialComponent(RedButton,{})