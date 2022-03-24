import React, { useState } from 'react'

function AppTwo() {

    const [name, setName] = useState("")
    const [err , setErr] = useState("")
    

    
 const handleKeyUp = (e)=>{
     console.log(e.target.value);
    if(e.keyCode === 13){
       /*  setName(e.target.value) */
        setErr(true)
    }else {
        setErr(false)
    }
 }
    return (
        <div className="container text-center">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"

                   /*  value={name} */
                  
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={(e)=> handleKeyUp(e) }
 
                />
            </div>

                {err && <h2>{name}</h2>}
           
            
            
        </div>
    )
}

export default AppTwo