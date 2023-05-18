import { useState, useEffect } from "react";
import useFetchData from "./useFetchData";

function Hooks() {
  const [count, setCount] = useState(0);
  const [api, setApi] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userLink, setUserLink] = useState("");
  console.log("userInput");
  console.log(userInput);

  const { data } = useFetchData(
    userInput != ""
      ? `https://restcountries.com/v3.1/name/${userInput}`
      : "https://restcountries.com/v3.1/all"
  );

  return (
    <div>
      <div className="container">
        <form>
          <input type="text" onChange={(e) => setUserInput(e.target.value)} />
        </form>
        <table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Country Name</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => {
              return (
                <>
                  <tr className="table-light">
                    <td scope="row">{index + 1}</td>
                    <td>{x.name.common}</td>
                    <td>{x.cca2}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hooks;
