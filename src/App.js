
import './App.css';

function App() {


  return (
    <div className="App">
      <div onClick={() => console.log("divin herhangi bir yerine tıkladım.")} className="border border-primary w-75 " >
        <p>Merhaba</p>
        <form onSubmit={(e) => {e.preventDefault();   console.log("formu gönderiyorum.");}}>
        <input className="text" 
        onClick={(e)=> {console.log("inputun içine tıkladım"); e.stopPropagation() }} 
        onChange={(event)=>console.log("değişiklik yapıyorum",event.target.value) }
        onFocus ={()=> {console.log("focusladım")}}
        onBlur={(e)=> { 
          if(e.target.value.length < 8 ){
            alert("en az 8 karakter girmelisiniz")}
          
          }}
 
        >


        </input>
        <button className="ms-3" onClick={()=> {console.log("butona tıkladım");}}>buraya tıkla</button>
        <div>
          <p>merhaba dostum</p>
        </div>
        </form>
      </div>
        
    </div>
  );
}

export default App;


