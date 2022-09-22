import style from "./Edicao.module.css";
import Input from "../../Form/Input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Edicao() {
  useEffect(() => {
    puxardados();
  }, []);

  const [dado, setDado] = useState({});
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);
  async function puxardados() {
    
    const data = await axios.get(`http://localhost:5000/cadastrados/${id}`);
    console.log(data)
    setDado(data.data);
  }
  
  let {usuario, senha, email} = dado

  async function atualizar(e) {
    e.preventDefault()
    const updateUsuario = {
        usuario: e.target.Usuario.value,
        senha: e.target.senha.value,
        email: e.target.email.value
    }

    await axios.put(`http://localhost:5000/cadastrados/${id}`,
       updateUsuario
       
    )

    puxardados()
  }


  return (
    <div>
      <form onSubmit={atualizar} className={style.Formulario}>
        <div>
          {/*passando os valores do input para o setUsuario, atraves do onchange*/}
          <Input
            type="text"
            name="Usuario"
            text="Usuario"
            value={usuario}
            onChange = {(e) => setDado({...usuario, usuario : e.target.value})}
            
          />
          <Input
            type="password"
            name="senha"
            text="Senha"
            value={senha}
            onChange = {(e) => setDado({...usuario, senha : e.target.value})}
          />

          <Input
            type="email"
            name="email"
            text="Email"
            value={email}
             onChange = {(e) => setDado({...usuario, email : e.target.value})}

          />
          <Input type="submit" name="enviar" />
        </div>
      </form>
    </div>
  );
}
