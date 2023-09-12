import React from "react";
import quiz from "../../images/space.png";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      
      <div className="main">
        <p className="text-center heading">Quizky</p>
        <div className="button py-auto" >
          <div class="d-grid gap-2 col-6 mx-auto ">
            <button class="btn btn-dark" type="button">
              <Link
                to="/select"
                style={{ textDecoration: "none", color: "white" }}
              >
                Select Category
              </Link>
            </button>
            <button class="btn btn-outline-info" type="button">
            <Link
                to="/instruction"
                style={{ textDecoration: "none", color: "white" }}
              >
              Read Instructions              </Link>

            </button>
          </div>
        </div>
        <p className="developed text-center">Developde By:Khushi Gangwar</p>
      </div>
    </>
  );
};

export default Home;
