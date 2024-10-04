import React, { useState } from "react";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  bannerperson,
} from "../assets";
import { region, city } from "../data/region";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { url } from "../state/products/productSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify"; // Import the Bounce transition if it's provided by your toast library
import "react-toastify/dist/ReactToastify.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const Schedule = () => {
  const [value, setValue] = useState<null>();

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    state: "",
    city: "",
  });
  const [address, setAddress] = useState<string>(""); // Initialize address with an empty string
  const [date, setDate] = useState<any>(""); // Initialize address with an empty string
  console.log(data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleChange2: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    // Your event handling logic here
    setAddress(e.target.value);
  };
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const formUpload = async () => {
    try {
      const response = await axios.post(`${url}/schedule-inspection`, {
        ...data,
        address,
        scheduleDate: date,
      });
      console.log(response?.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const handleSubmit = async () => {
    console.log("submitting");
    const status = await formUpload();
    if (status) {
      toast.success("success", {
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
      setData({
        fullName: "",
        email: "",
        phoneNumber: "",
        state: "",
        city: "",
      });
    } else {
      toast.error("Invalid / Incomplete Credentials", {
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
    <section className="grid md:grid-cols-2 md:bg-white">
      <div className="md:h-screen py-5 md:py-10 md:sticky top-0 bg-gradient-to-br from-[#109324]/10 to-[#E1C11A]/10 flex flex-col justify-center items-center p-4 rounded-b md:rounded-b-none">
        {/* <img src={bannerperson} alt="" /> */}
        <div className=" mb-2 md:mb-10">
          <h1 className="md:text-5xl text-lg max-w-2xl text-center font-semibold">
            The easiest and most reliable way to sell your car
          </h1>
          <p className="md:text-xl text-xs max-w-2xl mt-1 md:mt-4 text-center font-semibold">
            Mango Cars-inspected vehicles sell notably faster than those without
            inspection. Mango Cars-inspected vehicles sell notably faster
          </p>
        </div>
        <div className="grid grid-cols-3 w-64 md:w-full md:max-w-xl">
          <div className="col-span-3 flex justify-center -mb-4 md:-mb-10">
            <img
              src={bannerperson}
              className="object-contain h-28 md:h-48"
              alt=""
            />
          </div>
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
          <img src={banner3} alt="" />
          <img src={banner4} alt="" />
          <img src={banner5} alt="" />
          <img src={banner6} alt="" />
        </div>
      </div>
      <div className="p-4">
        <div className="md:p-10 p-4 border md:border-0 py-10 shadow-xl md:shadow-none">
          <h1 className="md:text-3xl text-2xl font-semibold text-center md:text-left">
            Schedule An Inspection
          </h1>
          <p className="max-w-md md:text-base text-xs text-zinc-500 text-center md:text-left">
            Mango Cars-inspected vehicles sell notably faster than those without
            inspection.
          </p>

          <form className="flex flex-col gap-5 mt-10">
            <div className="md:py-8 md:px-10  bg-white rounded flex flex-col gap-5 ">
              <h3 className="text-xl font-semibold">Personal Info</h3>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  className="py-2 px-4 w-full rounded border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChange}
                  className="py-2 px-4 w-full rounded border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={data.email}
                  name="email"
                  onChange={handleChange}
                  className="py-2 px-4 w-full rounded border"
                />
              </div>
            </div>
            <div className="md:py-8 md:px-10 bg-white rounded flex flex-col gap-5 ">
              <h3 className="text-xl font-semibold">Pickup Location</h3>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">State</label>

                  <select
                    name="state"
                    className="py-2 px-4 w-full rounded border"
                    value={data.state}
                    onChange={handleChangeSelect}
                  >
                    {" "}
                    <option value="" disabled selected hidden>
                      Select State
                    </option>
                    {region.map((item) => (
                      <option key={item} value={item}>
                        {" "}
                        {item}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">City</label>
                  <select
                    name="city"
                    className="py-2 px-4 w-full rounded border"
                    value={data.city}
                    onChange={handleChangeSelect}
                  >
                    {" "}
                    <option value="" disabled selected hidden>
                      Select City
                    </option>
                    {city.map((item) => (
                      <option key={item} value={item}>
                        {" "}
                        {item}{" "}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Address</label>
                <textarea
                  name="address"
                  value={address}
                  onChange={handleChange2}
                  className="py-2 px-4 w-full rounded border"
                ></textarea>
              </div>
            </div>
            <div className="md:py-8 md:px-10 bg-white rounded flex flex-col gap-5 ">
              <h3 className="text-xl font-semibold">Date & Time</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 w-full">
                  {/* <label htmlFor="">Date</label> */}
                  {/* <input
                  type="text"
                  className="py-2 px-4 w-full rounded border"
                /> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      className="py-2 px-4 w-full rounded border"
                      name="scheduleDate"
                      value={null}
                      onChange={
                        (newValue) => {
                          const dateTimeString = newValue?.format(
                            "YYYY-MM-DD HH:mm:ss"
                          );
                          setDate(dateTimeString ? dateTimeString : "");
                        }

                        //   setData((prev) => ({ ...prev, scheduleDate: newValue }))
                      }
                    />
                  </LocalizationProvider>
                </div>
                {/* <div className="flex flex-col gap-1">
                <label htmlFor="">Time</label>
                <input
                  type="text"
                  className="py-2 px-4 w-full rounded border"
                />
              </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
              className="w-full bg-primary text-white font-semibold text-lg rounded py-4"
            >
              Schedule Inspection
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Schedule;
