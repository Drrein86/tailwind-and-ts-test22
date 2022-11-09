//import { useState } from "react";
import { personProps } from "../interfaces";

export const Contact = (props: personProps) => {
  return (
    <div>
      <div className={"card"}></div>
      <img src="images\user.png" />
      <div className="person">
        <h1>HEADER</h1>
        <div>Name: {props.name}</div>
        <div>Email: {props.email}</div>
        <div>age: {props.age}</div>
        <div>This person {props.isMarried ? "is" : "is not"} married</div>
        {props.friends.map((friend) => (
          <p>{friend}</p>
        ))}
      </div>
      <div className={"buttons"}>
        <a href="#" className={"button AFbutton"}>
          Add friddend
        </a>
        <a href="#" className={"button MSGbutton"}>
          Message
        </a>
      </div>
    </div>
  );
};
