import React, { useState, useEffect } from "react";
import Header from "./Header";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [myForm, setMyForm] = useState("");
  const [userInput, setUserInput] = useState("");

  // useEffect(() => {

  // }, []);

  // const filteredCountries = countries.filter((country) =>
  //   country.name.common.toLowerCase().includes(myForm.toLowerCase())
  // );

  function searchHandle(e) {
    setMyForm(e.target.value);
  }

  function userHandle(event) {
    event.preventDefault();

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }

  return (
    <div>
      <Header />
      <br />
      <div className="container rounded">
        <form onSubmit={userHandle}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search your country"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            />
          </div>
          <button type="submit" class="btn btn-primary rounded">
            Search
          </button>
        </form>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Capital</th>
              <th scope="col">Currency</th>
              <th scope="col">Calling Code</th>
            </tr>
          </thead>
          <tbody>
            {countries.length == undefined
              ? " "
              : countries.map((country, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{country.name.common}</td>
                    <td>{country.cca2}</td>
                    <td>{country.capital}</td>
                    <td>
                      {country.currencies &&
                        Object.values(country.currencies)[0].name}
                    </td>
                    <td>
                      {country.callingCodes && country.callingCodes.length > 0
                        ? `+${country.callingCodes}`
                        : "N/A"}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Countries;
