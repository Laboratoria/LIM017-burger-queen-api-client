  import React, {useState} from "react";
import { Cart } from "../Cart/Cart";
import { Products } from "../Products/Products";

  export const NameClient = ({}) =>{
    const [name, setName] = useState("");
    // const handleSubmit = e => {
    //   e.preventDefault();
    //   alert("Se envio el nombre del cliente")
    // }
    // onSubmit={handleSubmit}
    const handleChange =(e)=> {
      setName(e.target.value);
    }

   return (
    <div>
    <form >
      <label htmlFor="name">Cliente:</label>
      <input 
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={handleChange}
      />
      {/* <input type="submit" /> */}
  </form>

    <Cart name={name} />
    <Products />
  </div>
   )
  }
  