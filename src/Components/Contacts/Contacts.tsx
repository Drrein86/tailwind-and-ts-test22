import React from "react";
import { personProps } from "../interfaces";
import { Country } from "../interfaces";
import { Contact } from "./Contact";
const personsArray: personProps[] = [
  {
    name: "big bag",
    email: "ssss@sadas.com",
    age: 24,
    isMarried: true,
    friends: ["jake", "ido", "moshe"],
    country: Country.island,
  },
  {
    name: "avi",
    email: "ssdassss@sadas.com",
    age: 25,
    isMarried: false,
    friends: ["jake", "ido", "moshe"],
    country: Country.israel,
  },
  {
    name: "mosh",
    email: "ssss@sadas.com",
    age: 24,
    isMarried: false,
    friends: ["jake", "elior", "moshe"],
    country: Country.maroco,
  },
];

function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <div>
        {personsArray.map((p) => (
          <Contact
            name={p.name}
            email={p.email}
            age={p.age}
            isMarried={p.isMarried}
            friends={p.friends}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
