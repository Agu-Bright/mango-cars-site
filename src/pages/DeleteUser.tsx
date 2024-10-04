import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cars, logo } from "../assets";
import { url } from "../state/products/productSlice";

const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (_email: String) => {
    if (!email) {
      toast.error("No email address", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/admin/user`, {
        email: _email,
      });
      setLoading(false);
      toast.success("Account Deleted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setEmail("");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div
      className="contact-section overview-bgi"
      style={{
        backgroundImage: `url(${cars})`,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "contain",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        content: "",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Box
        className="container"
        sx={{
          width: { md: "50%", xs: "85%" },
          background: "white",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
        }}
      >
        <div className="row" style={{ width: "100%", padding: "10px" }}>
          <div className="col-lg-12">
            {/* <!-- Form content box start --> */}
            <div className="form-content-box">
              {/* <!-- details --> */}
              <div className="details">
                {/* <!-- Logo --> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="/">
                    <img
                      src={logo}
                      className="cm-logo"
                      alt="black-logo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </a>
                </div>
                {/* <!-- Name --> */}
                <h3 style={{ fontWeight: "800" }}>Delete Account</h3>
                {/* <!-- Form start --> */}
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-text"
                      placeholder="Email Address"
                      style={{
                        border: "1px solid gray",
                        width: "100%",
                        height: "40px",
                        padding: "0px 10px",
                      }}
                    />
                  </div>
                  <div
                    className="form-group mb-0"
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {!loading && (
                      <button
                        onClick={() => handleSubmit(email)}
                        style={{
                          padding: "10px",
                          background: "green",
                          color: "white",
                          borderRadius: "5px",
                        }}
                        type="submit"
                        className="btn-md button-theme btn-block"
                      >
                        Delete Acccount{" "}
                      </button>
                    )}
                    {loading && (
                      <button
                        style={{
                          padding: "10px",
                          background: "green",
                          color: "white",
                          borderRadius: "5px",
                          width: "200px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="btn-md button-theme btn-block"
                      >
                        <CircularProgress size={25} sx={{ color: "white" }} />
                      </button>
                    )}
                  </div>
                </form>
                {/* <!-- Social List --> */}
              </div>
              {/* <!-- Footer --> */}
            </div>
            {/* <!-- Form content box end --> */}
          </div>
        </div>
      </Box>

      <ToastContainer />
    </div>
  );
};

export default DeleteUser;
