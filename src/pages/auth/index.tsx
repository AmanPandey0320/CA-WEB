import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <p>auth</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;