import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import People from "./components/People";
import Cards from "./components/Cards";
import PeopleContextProvider from "./context/PeopleContext";

function App() {
  const [card, setCard] = useState({});
  const [sex, setSex] = useState("");
  const [header, setHeader] = useState("");
  const [subheader, setSubheader] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://randomuser.me/api/";

  const retrieveData = async () => {
    const resp = await axios.get(url);
    const result = await resp.data.results[0];
    // console.log(result);
    const {
      gender,
      email,
      name: { first, last },
      phone,
      login: { password },
      location: {
        street: { name, number },
      },
      dob: { age },
      picture: { large },
    } = result;
    setSex(gender);
    setCard({
      email,
      first,
      last,
      password,
      phone,
      number,
      name,
      age,
      large,
    });
    setIsLoading(false);
    setHeader("");
    setSubheader("");
  };

  useEffect(() => {
    setIsLoading(true);
    retrieveData();
  }, []);

  return (
    <div className="container">
      <PeopleContextProvider>
        <Cards
          card={card}
          sex={sex}
          retrieveData={retrieveData}
          header={header}
          subheader={subheader}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setSubheader={setSubheader}
          setHeader={setHeader}
        />
        <People />
      </PeopleContextProvider>
    </div>
  );
}

export default App;
