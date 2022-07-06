import React from "react";

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
 const { id, dateEntry, name, price, image, type} = el;

    return (
        <div>
           <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{type}</td>
                <td>{image}</td>
                <td>
                <button onClick={()=> setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr> 
        </div>
    )
}