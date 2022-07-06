import React from "react";

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
 const { id, email, roles} = el;

    return (
        <div>
           <tr>
                <td>{email}</td>
                <td>{roles.admin}</td>
                <td>
                <button onClick={()=> setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr> 
        </div>
    )
}