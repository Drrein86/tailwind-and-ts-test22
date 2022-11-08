//import { useState } from "react";
import { personProps } from "./interfaces";

export const Person = (props: personProps) => {
  return (
    <div>
      <h1>HEADER</h1>
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div>
      <div>age: {props.age}</div>
      <div>This person {props.isMarried ? "is" : "is not"} married</div>
      {props.friends.map((friend) => (
        <p>{friend}</p>
      ))}
    </div>
  );
};
