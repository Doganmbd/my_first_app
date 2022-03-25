import React , {useState} from 'react'


function AppThree() {

    const data = [
    { name : "ali" },
    { name : "veli" },
    { name : "deli" },
    { name : "selami" },
    { name : "ali" }
    ]



    const [users , setUser] = useState(data)
  return (
    <div className="text-center mt-5">
        <h2 className="text-center mt-5">React Dersleri List</h2>
        <input className="d-block m-auto mt-5" type="text" placeholder='arama' />

        {users.map((user,index) => {
/*             return (
                <div key={index}>
                    <p  >{user.name}</p>
                </div>
            ) */
        return <Kullanicilar key={index} alici={user}/>
        })}

    </div>
  )
}
function Kullanicilar(kullanici) {
    return (
        <div >
            <p  >{kullanici.alici.name}</p>
        </div>)

}


export default AppThree