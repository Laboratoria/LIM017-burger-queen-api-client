import React, {useState, useEffect} from 'react';

const initailForm = {
    dateEntry: null,
    name: "",
    price: null,
    image: "",
    type: "",
    id: null 
};

export const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
const [form, setForm] =useState(initailForm)

   useEffect(()=> {
    if(dataToEdit){
        setForm(dataToEdit);
    } else {
        setForm(initailForm);
    }
   }, [dataToEdit]);

    const handleChange = (e) => {
     setForm({
       ...form,
       [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(!form.name || !form.price){
            alert("Datos incompletos");
            return;
        }

        if(form.id===null){
            createData(form);
        } else {
            updateData(form);
            
        }

        handleReset();

    }

    const handleReset = (e) => {
        setForm(initailForm);
        setDataToEdit(null);
    }

return (
    <div>
        <h3>{dataToEdit? "Editar":"Agregar"} </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange}  value={form.name} />
            <input type="text" name="price" placeholder="Precio" onChange={handleChange}  value={form.price} />
            <input type="text" name="type" placeholder="Tipo" onChange={handleChange}  value={form.type} />
            <input type="text" name="image" placeholder="Imagen" onChange={handleChange}  value={form.image} />
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset} />
        </form>
    </div>
)
}