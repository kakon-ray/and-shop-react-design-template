import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard-lg-sidebar">
              <DashboardSidebar />
            </div>
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
