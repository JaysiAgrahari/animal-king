import React, { useState, useEffect } from "react"
import "./footer.css"
import axios from "axios"

const Footer = () => {
    const [animal, setAnimal] = useState('birds')
    const [data, setData] = useState([])
    const onChange = (event) => {
        setAnimal(event.target.value)
        console.log(event.target.value)

    }
    useEffect(() => {
        {
            axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`).then(res => setData(res.data.breeds))
            console.log(data)
        }
    }, [animal]);

   



    return (
        <div className="form">
            <h2>Shelter</h2>

            <label>Location</label>
            <input
                placeholder="Location"
            />

            <label>Animal</label>
            <select name="slct1" id="slct1" onChange={onChange}>
                <input placeholder="animal" />
                <option value='bird'>Birds</option>
                <option value='cat'>Cats</option>
                <option value='dog'> Dogs</option>
                <option value='rabbit'>Rabbits</option>
                <option value='reptile'>Reptiles</option>

            </select>
        

            <label> Breed</label>
            <select name="slct2" id="slct2">
                {
                    data && data.map(data => <option value={data}>{data} </option>)

                }
            </select>


            <button> Submit </button>
            {
               
               // prompt("Able to take shelter")
            }
        


        </div>

    );
};



export default Footer