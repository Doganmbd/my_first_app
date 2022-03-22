import {useEffect, useState} from "react"
import './App.css';

function App() {

  const [ad,setAd] =useState(true)

  useEffect(() => {console.log(ad)})
  return (
    <div className="App">
      <div>
        <p>Merhaba, {ad}</p>
        <button onClick={() => setAd(!ad)}>isim değiştir</button>
      </div>
        
    </div>
  );
}

export default App;


