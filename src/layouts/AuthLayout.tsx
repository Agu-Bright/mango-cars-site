import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";
import FacebookSignin from "../components/FacebookAuth";
import GoogleAuth from "../components/GoogleAuth";

const AuthLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <section className="md:py-20">
      <form className="md:p-10 p-4 w-full md:border-2 max-w-3xl mx-auto rounded">
        <div className="flex flex-col justify-center items-center  gap-5">
          <h1 className="text-xl font-semibold">
            {pathname.includes("login") && "Login"}
            {pathname.includes("signup") && "Sign Up"}
            {pathname.includes("dealer") && "Become a Dealer"}
          </h1>
          {!pathname.includes("dealer") && (
            <>
              <div className="max-w-3xl mx-auto grid grid-cols-2 gap-5 w-full">
                <button className=" border rounded py-2 flex items-center justify-center gap-4">
                  <FaGoogle className="text-primary text-xl" />
                  <GoogleAuth
                    type={pathname === "/auth/signup" ? "signup" : "signin"}
                    handleOpen={() => console.log("open")}
                  />
                </button>
                <button className=" border rounded py-2 flex items-center justify-center gap-4">
                  <FaFacebook className="text-primary text-xl" />{" "}
                  <FacebookSignin
                    type={pathname === "/auth/signup" ? "signup" : "signin"}
                    handleOpen={() => console.log("open")}
                  />
                </button>
              </div>
              <div className="flex items-center w-full gap-2">
                <hr className="w-full" />
                <p>OR</p>
                <hr className="w-full" />
              </div>
            </>
          )}
          <Outlet />
        </div>
      </form>
    </section>
  );
};

export default AuthLayout;
