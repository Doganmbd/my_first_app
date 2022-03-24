import React, { useState } from 'react'

function AppTwo() {

    const [name, setName] = useState("")
    const [err , setErr] = useState("")
/*     const domName = (e) => {
        if(e.code){}
        setName(e.target.value)
         console.log(e);
        } */
    
 const handleKeyUp = (e)=>{
     console.log(e.target.value);
    if(e.keyCode === 13){
       /*  setName(e.target.value) */
        setErr(true)
    }else {
        setErr(false)
    }
 }
/* 
    const handleName = () => {
        if(name.length < 6 ){
            setErr(true)
        }else {
            setErr(false)
        }
    } 
 */
 /*    console.log(name)
 */
    return (
        <div className="container text-center">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"

                    value={name}
                    /* onChange={domName} */
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={(e)=> handleKeyUp(e) }
 
                />

                {/* <button className="btn btn-outline-secondary" type="button" id="button-addon1"
                onClick={handleName}

                >Button</button> */}


            </div>

                {err && <h2>{name}</h2>}
            {/* {err ? <h2>{err}</h2> : <h2>{name}</h2> }  */}
            
            
        </div>
    )
}

export default AppTwo