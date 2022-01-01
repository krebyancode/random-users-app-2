import { createContext, useState } from "react";

export const PeopleContext = createContext();

const PeopleContextProvider = (props) => {
  const [people, setPeople] = useState([]);

  return (
    <PeopleContext.Provider value={{ people, setPeople }}>
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
