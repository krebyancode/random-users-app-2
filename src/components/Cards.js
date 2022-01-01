import { useContext } from "react";
import mailSvg from "../assets/mail.svg";
import manSvg from "../assets/man.svg";
import womanSvg from "../assets/woman.svg";
import mapSvg from "../assets/map.svg";
import padlockSvg from "../assets/padlock.svg";
import phoneSvg from "../assets/phone.svg";
import adultmanSvg from "../assets/growing-up-man.svg";
import adultwomanSvg from "../assets/growing-up-woman.svg";
import { Button } from "react-bootstrap";
import { PeopleContext } from "../context/PeopleContext";

const Cards = ({
  card,
  sex,
  retrieveData,
  header,
  subheader,
  isLoading,
  setIsLoading,
  setSubheader,
  setHeader,
}) => {
  const { people, setPeople } = useContext(PeopleContext);

  const { email, first, last, password, phone, number, name, age, large } =
    card;

  const newUser = () => {
    setIsLoading(true);
    window.setTimeout(() => {
      retrieveData();
    }, 1000);
  };

  const addUser = () => {
    setPeople([
      ...people,
      {
        id: new Date().getTime().toString(),
        name: `${first} ${last}`,
        email,
        phone,
        age,
      },
    ]);
  };

  const isAlreadyExist = (phone) => {
    if (people.length == 0) {
      addUser();
    } else {
      for (let i = 0; i < people.length; i++) {
        if (people[i].phone === phone) {
          alert(
            "This person already added to the list. Please explore a 'new user'."
          );
          break;
        } else {
          if (i < people.length - 1) {
            continue;
          } else {
            addUser();
          }
        }
      }
    }
  };

  return (
    <div className="card">
      {isLoading ? (
        <h3 className="user">Loading...</h3>
      ) : (
        <div className="user">
          <img className="avatar" src={large} alt={last}></img>
          <p>{subheader ? `My ${subheader} is` : "My name is"} </p>
          <h3>{header ? header : `${first} ${last}`}</h3>
        </div>
      )}
      <div className="images">
        <img
          className="image"
          src={sex === "male" ? manSvg : womanSvg}
          alt={last}
          onMouseOver={() => {
            setHeader(`${first} ${last}`);
            setSubheader("name");
          }}
        ></img>
        <img
          className="image"
          src={mailSvg}
          alt={email}
          onMouseOver={() => {
            setHeader(email);
            setSubheader("email address");
          }}
        ></img>
        <img
          className="image"
          src={sex === "male" ? adultmanSvg : adultwomanSvg}
          alt={age}
          onMouseOver={() => {
            setSubheader("age");
            setHeader(age);
          }}
        ></img>
        <img
          className="image"
          src={mapSvg}
          alt={name}
          onMouseOver={() => {
            setSubheader("street address");
            setHeader(`${number} ${name}`);
          }}
        ></img>
        <img
          className="image"
          src={phoneSvg}
          alt={phone}
          onMouseOver={() => {
            setSubheader("phone number");
            setHeader(phone);
          }}
        ></img>
        <img
          className="image"
          src={padlockSvg}
          alt={password}
          onMouseOver={() => {
            setHeader(password);
            setSubheader("password");
          }}
        ></img>
      </div>
      <div className="btn-container">
        <Button variant="primary" onClick={newUser}>
          New User
        </Button>
        <Button variant="secondary" onClick={() => isAlreadyExist(phone)}>
          Add User
        </Button>
      </div>
    </div>
  );
};

export default Cards;
