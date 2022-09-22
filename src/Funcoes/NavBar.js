import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
export default function Navbar() {
  return (
    <div>
      <div className={style.NavBar}>
        <h1 className={style.NavLin}>
          <Link to="/">Titulo</Link>
        </h1>

        <Link className={style.NavLin} to="/inscricao">
          inscreva-se
        </Link>

    

        <Link className={style.NavLin} to="/">
          Pagina inicial
        </Link>
      </div>
    </div>
  );
}
