import React from "react";

const Person = ({ person }) => {
  const { name, email, phone, age, id } = person;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{age}</td>
    </tr>
  );
};

export default Person;
