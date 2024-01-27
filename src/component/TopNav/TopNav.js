import React, { useState } from "react";
import styles from "./TopNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSign } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import DashboardOffCanvas from "../OffCanvas/DashboardOffCanvas/DashboardOffCanvas";
const TopNav = () => {
  // this is dashboard sidebar offcanvas state
  const [showDashboard, setShow] = useState(false);

  const handleCloseDashboard = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.topnav}>
        <div className="container-fluid">
          <div
            className={`d-flex justify-content-md-between  align-items-center flex-wrap ${styles.topNavContent}`}
          >
            <div
              className={`align-self-center justify-content-center ${styles.topnavText}`}
            >
              <p className="my-0 text-center ">
                Special collection already available
                <span className="readmore">Read More...</span>
              </p>
            </div>
            <div className="topnav-list">
              <ul className="d-flex flex-wrap align-self-center justify-content-center my-0 ps-0">
                <li>
                  <Link to="/compare">
                    <button
                      className="mx-3 my-2 top-btn"
                      style={{
                        padding: "0",
                        border: "none",
                        background: "none",
                      }}
                    >
                      <FontAwesomeIcon icon={faCodeCompare} className="me-1" />
                      compare
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    className="mx-3 my-2 top-btn"
                    onClick={handleShow}
                    style={{
                      padding: "0",
                      border: "none",
                      background: "none",
                    }}
                  >
                    <FontAwesomeIcon icon={faDashboard} className="me-1" />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    className="mx-3 my-2 "
                    onClick={() => navigate("/dashboard")}
                    style={{ padding: "0", border: "none", background: "none" }}
                  >
                    <FontAwesomeIcon icon={faUser} className="me-1" />
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    className="mx-3 my-2 "
                    onClick={() => navigate("/login")}
                    style={{ padding: "0", border: "none", background: "none" }}
                  >
                    <FontAwesomeIcon icon={faSign} className="me-1" />
                    Login
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/registation")}
                    className="mx-3 my-2 "
                    style={{ padding: "0", border: "none", background: "none" }}
                  >
                    <FontAwesomeIcon icon={faLock} className="me-1" />
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <DashboardOffCanvas
        showDashboard={showDashboard}
        handleCloseDashboard={handleCloseDashboard}
        placement={"end"}
      />
    </>
  );
};

export default TopNav;
