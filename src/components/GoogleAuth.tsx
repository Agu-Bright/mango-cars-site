import axios from "axios";
import { auth, provider } from "../firebase";
import { signInWithPopup, User } from "firebase/auth";
import { url } from "../state/products/productSlice";
// import { useContext } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../state/auth/userSlice";
import { AppDispatch } from "../state/store";
import { toast, ToastTransition } from "react-toastify";
import { Bounce } from "react-toastify"; // Import the Bounce transition if it's provided by your toast library
import "react-toastify/dist/ReactToastify.css";

interface GoogleAuthProps {
  type: string;
  handleOpen: () => void;
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ type, handleOpen }) => {
  // const { setAuth } = useContext(CarContext);
  const dispatch = useDispatch<AppDispatch>();

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;
      console.log("Facebook sign-in successful:", user);

      if (type === "signup") {
        try {
          const { data } = await axios.post(
            `${url}/register`,
            {
              fullName: user.displayName,
              password: user.uid,
              email: user.email,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // setAuth(data?.user);
          dispatch(loadUser());

          handleOpen();
        } catch (error: any) {
          handleOpen();
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
            transition: Bounce as ToastTransition,
          });
        }
      } else {
        try {
          const { data } = await axios.post(
            `${url}/login`,
            {
              password: user.uid,
              email: user.email,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          dispatch(loadUser());
          handleOpen();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error: any) {
      console.error("Facebook sign-in error:", error);
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce as ToastTransition,
      });
    }
  };

  return <div onClick={handleFacebookSignIn}>Google</div>;
};

export default GoogleAuth;
