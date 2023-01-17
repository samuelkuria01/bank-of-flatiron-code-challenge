import { useState } from "react";

function CreateForm(){

    const [data, setData] = useState({
        date:"",
        description:"",
        category:"",
        amount:"",
    })
    
    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value,});
        console.log(data)
    }


    return (
        <div className="formfield" >
            
            <form className="align-items-centre">
                <div className="d-flex justify-content-around" >
                <input onChange={handleChange} id="date" value={data.date} type="date" name="date"></input>
                <input onChange={handleChange} id="description" value={data.description}   type="text" name="description" placeholder="Description"></input>
                <input onChange={handleChange} id="category" value={data.category}   type="text" name="category" placeholder="Category"></input>
                <input onChange={handleChange} id="amount" value={data.amount}   type="number" name="amount" placeholder="Amount"></input>
                </div >
                <button onChange={handleChange} className="btn btn-primary mt-3 p-9 btn position-relative" type="submit" >submit </button>
            </form>
        </div>

    )

}

export default CreateForm;