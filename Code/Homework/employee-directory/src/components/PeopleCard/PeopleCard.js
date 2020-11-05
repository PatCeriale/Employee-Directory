import React from "react";
import "./style.css";
import API from "../../utils/API";
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

{
  const peopleData = axios.get(BASEURL).then((res) => {
    res.data.results[1].name.first.json;
  });
  //   console.log(peopleData);
}

function PeopleCard() {
  //   const { name, image, occupation, location } = props.friend;
  return (
    <div className="PeopleCard">
      <div className="media">
        <img
          className="align-self-start mr-3"
          src="https://place-puppy.com/150x150"
          //   picture.large
          alt="puppy"
        />
        <div className="media-body">
          <h5 className="mt-0">
            <strong>name.first name.last</strong>
          </h5>
          <p>
            Address: location.street.number location.street.name location.city,
            location.state location.postcode
            <br></br>Email: email
            <br></br>Phone: phone<br></br>Age: dob.age
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
