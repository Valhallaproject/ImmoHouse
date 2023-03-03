import React from "react";

function Input(props: { id: string | (string & {}) | undefined; name: string | (string & {}) | undefined; className: string | (string & {}) | undefined; type: string | (string & {}) | undefined; placeholder: string | undefined; value: string | number | readonly string[] | undefined; onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; }){
  return(
    <input
      id={props.id}
      name={props.name}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
  


export default Input;