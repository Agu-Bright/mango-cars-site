import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../components/app/NavBar";
import FooterSection from "../components/app/FooterSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { loadUser } from "../state/auth/userSlice";
import SnackBar from "../components/Snackbar";

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  useEffect(() => {
    const el = document.getElementById("root");
    el?.scrollIntoView();
  }, [pathname]);

  console.log("pathname", pathname);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      {pathname === "/deleteUser" ? (
        <Outlet />
      ) : (
        <SnackBar>
          <NavBar />
          <main>
            <Outlet />
          </main>
          <FooterSection />
        </SnackBar>
      )}
    </>
  );
};

export default Layout;
