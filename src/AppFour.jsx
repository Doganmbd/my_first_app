import React , {useState} from "react";

function AppFour() {

/*     const [ad,setAd] = useState("")
    const [sehir,setSehir] = useState("")
    const [yorum,setYorum] = useState("") */

    const [form,setForm] = useState({isim:"" ,şehir:"",yorum:""})


    const handleChange = (e)=> {
        setForm({...form , [e.target.name] : e.target.value})
    }


/* 
    console.log(ad);
    console.log(sehir);
    console.log(yorum); */
    console.log(form);
   

  return (
    <div>
      <form>
        <fieldset >
          <legend>Disabled fieldset example</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Disabled input
            </label>
            <input
             
            onChange = {handleChange}
            name="isim"


              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="isim gir"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Disabled select menu
            </label>
            <select id="disabledSelect" className="form-select"
            
            onChange={handleChange}
            name="şehir"

            >
              <option>Disabled select</option>
              <option>ibla</option>
              <option>dsdsds</option>
            </select>
          </div>
          <div className="mb-3">

            <div className="form-floating"
            
            

            >
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                onChange={handleChange}
                name="yorum"
                
                ></textarea>
                <label htmlFor="floatingTextarea">Comments</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AppFour;
