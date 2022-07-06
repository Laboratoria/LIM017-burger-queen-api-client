import React, {useState} from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable =({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3> Tabla de Productos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>tipo</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                      data.map((el)=> <CrudTableRow 
                      key={el.id} 
                      el={el} 
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData} 
                      />)
                      ):( 
                        <tr>
                            <td colSpan="5">
                              Sin datos 
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}