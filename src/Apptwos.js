import React,{useState} from 'react'

function Apptwos() {

    const [name,setName] = useState("")
    const [err,setErr] = useState("")

    const [final,setFinal] = useState(false)


/* 
    console.log(name) */


    const handleName = ()=> {
        if(name.length < 6) {
            setErr("6 dan az karakter girdiniz")
        }else {
            setErr("")
            setFinal(true)
        }
    }

  return (
    <div className="container text-center mt-5">

        <div className="input-group mb-3">
            

            {final ?
            <React.Fragment> 
            
            <h2 className="container text-center mt-5">Tebrikler giriş yaptın {name}</h2> 
            <button 
            className="d-grid gap-2 col-2 mx-auto" 
            onClick={()=> setFinal(false)} > çıkışyap </button>
            
            </React.Fragment>
             : 
            
            <React.Fragment>
            <button 
            className="btn btn-outline-secondary"
            type="button" 
            id="button-addon1"
            
            onClick={handleName}
            
            >Button</button>


        

            <input 
            type="text" 
            className="form-control" 
            placeholder="isim giriniz" 
            aria-label="Example text with button addon" 
            aria-describedby="button-addon1"

            value={name}
            onChange={(e) => setName(e.target.value)}
            
            />
            <div className="container text-center mt-5" >
                {err ? <h2>{err}</h2>: <h2>hoşgeldin </h2>  } 
            </div>
            </React.Fragment> }
        </div>
        
        
       
        
    </div>
  )
}

export default Apptwos 