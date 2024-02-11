// import React from 'react'

// // localstorege.setItem()  data add hoto
// // localstorege.GetItem()  
// // localstorege.RemoveItem()

// const Test = () => {
//    const arr = ["dell","hp"]

//   const handleAdd=()=>{
//     console.log("add called");
//     localStorage.setItem("brand",JSON.stringify(arr))
//   }
  
//     const handleRemove=()=>{
//       localStorage.removeItem("brand")
//     }
//     const handleGet=()=>{
//       const result= localStorage.getItem("brand")
//       console.log(JSON.parse(result));
//     }
//   return <>
//   <button onClick={handleAdd}>add</button>
//   <button onClick={handleRemove}>remove</button>
//   <button onClick={handleGet}>Get</button>
//   </>
// }

// export default Test

import React, { useState } from 'react'

const Test = () => {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
 function getData(val){
   console.warn(val.target.value)
   setData(val.target.value)
   setPrint(false)

 }
   
  return <>
  {

  }
  <input type="text" onChange={{getData}}/>
  <button onClick={handleClick}>click</button>
  <button onClick={e=> handleClick("DELL")}>Print Data</button>
    
  </>
}

export default Test

