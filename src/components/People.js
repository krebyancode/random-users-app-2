import React from "react";
import { Table } from "react-bootstrap";
import Person from "./Person";
import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

const People = () => {
  const { people } = useContext(PeopleContext);
  return (
    <Table striped bordered hover className="mt-4 bg-light">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </tbody>
    </Table>
  );
};

export default People;
