import React, { useState } from "react";
import Header from "./Header";

const List = () => {
  const [task, setTask] = useState({ title: "", desc: "", role: "" });
  const [todo, setTodo] = useState([]);
  const [userInput, setUserInput] = useState();
  const [description, setDescription] = useState();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let obj = { title: userInput, desc: description };
  //     console.log(obj);
  //     setTask([...task, obj]);
  //     e.target.reset();
  //   };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevFromData) => ({ ...prevFromData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform data processing or validation here
    console.log(task);
    setTodo([...todo, task]);

    // Reset form after submission
    setTask({ title: "", desc: "", role: "" });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your task"
                name="title"
                value={task.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="description"
                name="desc"
                value={task.desc}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="role"
                value={task.role}
                onChange={handleInputChange}
                className="form-select"
                id="exampleSelect1"
              >
                <option>-- Select Role -- </option>
                <option value="Intern">Intern </option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="CTO">CTO</option>
              </select>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary rounded">
            Submit
          </button>
        </form>
        <br />

        <table className="table table-hover">
          <tr>
            <th>Sr.No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Job</th>
          </tr>
          {Object.values(todo).map((e, index) => {
            return (
              <tr key={index} className="table-primary">
                <td>{index + 1}</td>
                <td>{e.title}</td>
                <td>{e.desc}</td>
                <td>{e.role}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default List;
