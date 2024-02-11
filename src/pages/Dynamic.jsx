import React, { useState } from 'react'

const Dynamic = () => {
    const [fileds, setFileds] = useState([1])
    const handleRemove = (i) => {
    setFileds( fileds.filter((item,index)=> i !== index))
    }
  return <>
  <button onClick={e=> setFileds(fileds.length < 6 ? [...fileds,"dell"] : fileds)}>add</button>
  <hr />
  {
    fileds.map((item,index) => <div>
        <input type='text'/>
       {index > 0 &&  <button onClick={e=> handleRemove(index)}>remove{index}</button>}
    </div>)
  }
  </>
}

export default Dynamic