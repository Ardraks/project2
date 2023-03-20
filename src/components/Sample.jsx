import React from 'react'

function Sample() {
    var name=["nirmala","College","Arts"]
return (
    <div>
      <ul>
        {name.map((value,index)=>{return <li key={index}>{value}</li>})}
      </ul>
    </div>
  )
}

export default Sample
