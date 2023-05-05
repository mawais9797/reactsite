import React from "react";
import Header from "./Header";
import "../App.css";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="container">
        <h2>Contact Us</h2>
        <div className=" formBorder">
          <form>
            <fieldset>
              <div className="form-group">
                <label for="exampleInputEmail1" className="form-label mt-4">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleTextarea" class="form-label mt-4">
                  Write your query
                </label>
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary rounded">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
