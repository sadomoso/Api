import { useState } from "react"
import style from "./Input.module.css"

export default function Input({ type, name, text, placeholder, value, onChange}) {
  
  return (
    <div className={style.Formcontrol}>
      <label htmlFor={name}>{text}</label>
      <input
        required
        type={type}
        name={name}
        id={name}
        text={text}
        value={value}
        onChange={onChange}
        
        placeholder={placeholder}
        

      ></input>
    </div>
  );
}
