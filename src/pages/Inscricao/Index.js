import style from "./inscricao.module.css";
import Input from "../../Form/Input";
import { useState } from "react";
import axios from "axios";


export default function Inscricao() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [confSenha, setConfsenha] = useState("");

  // creando a função de enviar os dados atraves do body
  async function crearPost(cadastro){
    console.log(cadastro)
     const dados = await axios.post("http://localhost:5000/cadastrados", cadastro
      
    );
  }

  //criando a função para pegar os dados atravez do evento e passar para newDados
  function salvar(event) {
    event.preventDefault();

    if (confSenha === senha) {
      const newDados = {
        usuario: usuario,
        senha: senha,
        email: email,
      };
      //chamando a função de enviar dados, com os dados (newdados) dentro
      crearPost(newDados);
      alert("Usuario criado");
    } else {
      alert("Senhas diferentes!");
    }
  }
  return (
    <form onSubmit={salvar} className={style.Formulario}>
      <div>
         {/*passando os valores do input para o setUsuario, atraves do onchange*/}
        <Input
          type="text"
          name="Usuario"
          text="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Input
          type="password"
          name="senha"
          text="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Input
          type="password"
          name="confSenha"
          text="Confirme sua senha"
          value={confSenha}
          onChange={(e) => setConfsenha(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          text="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="submit" name="enviar" />
      </div>
    </form>
  );
}
