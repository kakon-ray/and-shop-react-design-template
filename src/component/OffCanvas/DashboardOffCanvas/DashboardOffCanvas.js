import React from "react";
import { Button, FormControl, InputGroup, Offcanvas } from "react-bootstrap";
import style from "./DashboardOffCanvas.module.css";

import DashboardSidebar from "../../../Dashboard/DashboardSidebar/DashboardSidebar";

const DashboardOffCanvas = ({
  handleCloseDashboard,
  placement,
  showDashboard,
}) => {
  return (
    <Offcanvas
      show={showDashboard}
      onHide={handleCloseDashboard}
      placement={placement}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto textwarning">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <DashboardSidebar />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default DashboardOffCanvas;
