'use client'

import { useEffect, useState } from "react"

interface user{
    nombre: string
    apellido: string
    telefono: string
    correo: string
    birthday: string
    edad: number
}

export default function Formulario() {
    const [users, setUsers]=useState<user[]>([])
    const [nombre, setNombre]=useState<string>("")
    const [apellido, setApellido]=useState<string>("")
    const [telefono, setTelefono] = useState<string>("")
    const [correo, setCorreo]=useState<string>("")
    const [birthday, setBirthday]=useState<string>("")

    const calcularEdad = (birthday: string): number => {
        const cumpleanos = new Date(birthday);
        const hoy = new Date();
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        const mes = hoy.getMonth() - cumpleanos.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    };

    useEffect(() =>{

    }, [nombre])

    useEffect(() =>{

    }, [apellido])


    useEffect(() =>{

    }, [telefono])

    useEffect(() =>{

    }, [correo])



    useEffect(() =>{

    }, [birthday])



    const submitForm = (e:any) =>{
        e.preventDefault();

        const edad = calcularEdad(birthday);
        const nuevoUsuario: user = {
            nombre,
            apellido,
            telefono,
            correo,
            birthday: birthday,
            edad
        };

        setUsers([...users, nuevoUsuario]);

        // Limpiar los campos del formulario
        setNombre("");
        setApellido("");
        setTelefono("");
        setCorreo("");
        setBirthday("");

        

    }

  return (
        <>
            <div className="row">
                <div className="col-6">
                    <form className="mx-5" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="" className="form-label" >Nombre</label>
                            <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Apellido</label>
                            <input type="text" className="form-control" placeholder="Apellido" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Telefono</label>
                            <input type="tel" className="form-control" placeholder="Telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Correo</label>
                            <input type="email" placeholder="name@example.com" className="form-control" value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" value={birthday} onChange={(e)=> setBirthday(e.target.value)}/>
                        </div>
                        <div><label htmlFor=""></label></div>
                        <button type="submit" className="btn btn-primary">Enviar informacion</button>

                    </form>
                </div>

              <div className="col-6">
                  <h3>Usuarios Registrados</h3>
                  <table className="table-success">
                      <thead>
                          <tr className="table-success">
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Teléfono</th>
                              <th>Correo</th>
                              <th>Fecha de Nacimiento</th>
                              <th>Edad</th>
                          </tr>
                      </thead>
                      <tbody>
                          {users.map((user, index) => (
                              <tr key={index} className="table-success">
                                  <td>{user.nombre}</td>
                                  <td>{user.apellido}</td>
                                  <td>{user.telefono}</td>
                                  <td>{user.correo}</td>
                                  <td>{user.birthday}</td>
                                  <td>{user.edad}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>



                </div>


            </div>

        </>
    )
}
