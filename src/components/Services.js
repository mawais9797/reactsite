import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <Header />
      <br />

      {/* <div className="card text-white bg-primary mb-3 servicesCard">
        <div className="card-header">App Development</div>
        <div className="card-body">
          <h4 className="card-title">Android App Development</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
      <div className="container">
        <div className="card text-white bg-primary mb-3 servicesCard">
          <div className="card-header">Mobile Development</div>
          <div className="card-body">
            <h4 className="card-title">android app development</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card text-white bg-danger mb-3 servicesCard">
          <div className="card-header">Mobile Development</div>
          <div className="card-body">
            <h4 className="card-title">ios app development</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card text-white bg-dark mb-3 servicesCard">
          <div className="card-header">Mobile Development</div>
          <div className="card-body">
            <h4 className="card-title">mobile app design</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card text-white bg-info mb-3 servicesCard">
          <div className="card-header">Marketing</div>
          <div className="card-body">
            <h4 className="card-title">mobile app marketing</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card text-white bg-success mb-3 servicesCard">
          <div className="card-header">Web Development</div>
          <div className="card-body">
            <h4 className="card-title">web Applications development</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card text-white bg-warning mb-3 servicesCard ">
          <div className="card-header">SEO</div>
          <div className="card-body">
            <h4 className="card-title">Search Engine Optimization</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
