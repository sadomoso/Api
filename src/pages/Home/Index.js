import style from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  //executar a funçãi puxar dados somente uma vez
  useEffect(() => {
    puxardados();
  }, []);

  //coletor de dados
  const [usuario, setUsuarios] = useState([]);

  //conectando ao url e passando os dados armazenado no data
  async function puxardados() {
    const dados = await axios.get("http://localhost:5000/cadastrados");
    setUsuarios(dados.data);
  }
  const deletar = (id) => {
    axios.delete(`http://localhost:5000/cadastrados/${id}`);
  };

  return (
    //retornando os usuarios e emails cadastrados
    <div>
      <form className={style.Formulario}>
        <h1>Usuarios ja Cadastrados</h1>
        <ul>
          {
            //checando se possui algum usuario cadastrado
          }
          {usuario.length === 0 ? (
            <p>Sem usuarios no momento</p>
          ) : (
            //passando por cada id e puxando os dados de email e usuario, para mostrar no home
            usuario.map((u) => {
              return (
                <div key={u.id} className={style.container}>
                  <fieldset>
                    <p>ID: {u.id} </p>
                    <p>Email: {u.email} </p>
                    <p>Usuario: {u.usuario} </p>
                    {/*chamei a função deletar passando o id. OBS: '() = >' chamar somente para o conjunto ao qual se encontra!*/}
                    <button onClick={() => deletar(u.id)}>Delete</button>
                    <Link className={style.NavLin} to={{ pathname:`/edicao/${u.id}`}}> Editar</Link>
                  </fieldset>
                </div>
              );
            })
          )}
        </ul>
      </form>
    </div>
  );
}
