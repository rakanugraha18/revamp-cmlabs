import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import InputForm from "../../atoms/Input/index";
import { useState } from "react";
import registerUser from "../../api/registerUser";
import banner from "../../../assets/bannerRegister.svg";
import TextArea from "../../atoms/Input/TextArea";

const FormRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateFormData = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        setErrorMessage(`Field ${key} tidak boleh kosong`);
        return false;
      }
    }
    return true;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!validateFormData()) {
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      setLoading(false);

      if (response.status === 201) {
        navigate("/login");
      } else {
        setErrorMessage("Gagal menyimpan data ke server");
      }
    } catch (error) {
      console.error("Error selama pengiriman data:", error);
      setLoading(false);

      if (error.response) {
        console.error("Server error response:", error.response.data);
        setErrorMessage(error.response.data.error);
      } else if (error.request) {
        console.error("No response from server");
        setErrorMessage("No response from server");
      } else {
        console.error("Error:", error.message);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex">
        {/* Banner */}
        <div className="hidden md:block min-w-[512px] h-[983px]">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-lg drop-shadow rounded-2xl max-w-full max-h-full min-w-[837px] min-h-[983px] mx-[26px] p-8 flex justify-center items-center relative">
          <form
            className="w-full px-[132px]"
            action="#"
            onSubmit={handleRegister}
          >
            <div className="flex lg:absolute top-4 right-4 pt-2 pr-7 pb-2">
              <p>
                Already have an account?{" "}
                <a href="/login" className="font-semibold text-bold underline">
                  Sign In
                </a>
              </p>
            </div>
            <div className=" justify-start mb-5">
              <h2 className="text-2xl font-bold">Welcome to SmartLiving</h2>
              <p>Please enter your details to create your account</p>
            </div>
            {errorMessage && (
              <div className="text-sm text-red-500 mt-1 dark:text-red-400">
                {errorMessage}
              </div>
            )}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-4">
              <InputForm
                label="First Name"
                htmlFor="firstName"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <InputForm
                label="Last Name"
                htmlFor="lastName"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <InputForm
              label="Email"
              htmlFor="email"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputForm
              label="Phone Number"
              htmlFor="phoneNumber"
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              required
            />
            <TextArea
              label="Address"
              htmlFor="address"
              type="address"
              name="address"
              id="address"
              placeholder="Address"
              required
            />

            <InputForm
              label="Postal Code"
              htmlFor="postalCode"
              type="postalCode"
              name="postalCode"
              id="postalCode"
              placeholder="Postal Code"
              required
            />
            <InputForm
              label="Your Password"
              htmlFor="password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  className="form-checkbox text-[#16737a]"
                />
                <span className="ml-2 text-sm">
                  By checking the box, I agree to the terms of sale and privacy
                  policy
                </span>
              </label>
            </div>
            <Button
              type="submit"
              classname={`dark:bg-[#16737a] dark:hover:bg-[#167a69] dark:focus:ring-[#167a69] bg-[#16737a] hover:bg-[#27858b] focus:ring-4 focus:ring-[#16737a] w-[75%] mx-16`}
            >
              {loading ? "Register loading..." : "Sign up account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;

// import React, { useState } from "react";
// import FormGroup from "../../molecules/FormGroup";
// import Input from "../../atoms/Input";
// import Button from "../../atoms/Button";
// import registerUser from "../../api/registerUser";
// import banner from "../../../assets/bannerRegister.svg"; // Pastikan Anda memiliki gambar banner di direktori ini

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     postalCode: "",
//     password: "",
//     confirmPassword: "",
//     termsAccepted: false,
//   });

//   // Fungsi untuk menangani perubahan input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Fungsi untuk menangani pengiriman formulir
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Set loading to true before making the API call
//       setLoading(true);

//       const response = await registerUser(
//         formData.firstName,
//         formData.lastName,
//         formData.email,
//         formData.password,
//         formData.confirmPassword
//       );
//       // Reset loading to false after successful register
//       setLoading(false);

//       // Tangani respons dari server
//       if (response.status === 201) {
//         // Berhasil mengirim data ke server, Anda dapat melakukan tindakan lainnya
//         // Contoh: Mengalihkan ke halaman lain atau memberikan pesan sukses kepada pengguna
//         navigate("/Login");
//       } else {
//         // Tangani kesalahan dari server (status respons selain 201)
//         console.error("Gagal menyimpan data ke server");
//       }
//     } catch (error) {
//       // Tangani kesalahan jaringan atau masalah lainnya
//       console.error("Error selama pengiriman data:", error);

//       // Reset loading to false after an error occurs
//       setLoading(false);

//       // Handle API errors and display them on the form
//       if (error.response) {
//         // Server mengembalikan respons selain 2xx
//         console.error("Server error response:", error.response.data);

//         // Assuming the API returns error messages in a 'message' field
//         const errorMessage = error.response.data.message;

//         // Update your component state or use a library like react-toastify to display the error
//         // For simplicity, let's update the state with the error message
//         setErrorMessage(errorMessage);
//       } else if (error.request) {
//         // Request dibuat tetapi tidak ada respons dari server
//         console.error("No response from server");
//       } else {
//         // Kesalahan lainnya
//         console.error("Error:", error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen ">
// <div className="flex">
//   {/* Banner */}
//   <div className="hidden md:block min-w-[512px] h-[983px]">
//     <img
//       src={banner}
//       alt="Banner"
//       className="w-full h-full object-cover"
//     />
//   </div>

//         {/* Form Container */}
//         <div className="bg-white shadow-lg drop-shadow rounded-2xl max-w-full max-h-full min-w-[837px] min-h-[983px] mx-[26px] p-8 flex justify-center items-center relative">
//           <form onSubmit={handleSubmit} className="w-full px-[132px]">
// <div className="flex lg:absolute top-4 right-4 pt-2 pr-7 pb-2">
//   <p>
//     Already have an account?{" "}
//     <a href="" className="font-semibold text-bold underline">
//       Sign In
//     </a>
//   </p>
// </div>
// <div className=" justify-start mb-5">
//   <h2 className="text-2xl font-bold">Welcome to SmartLiving</h2>
//   <p>Please enter your details to create your account</p>
// </div>
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-4 mb-1">
//               <FormGroup label="First Name">
//                 <Input
//                   type="text"
//                   name="firstName"
//                   placeholder="Enter your first name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   width="100%" // Lebar 100% dari elemen kontainer
//                   responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//                   required
//                 />
//               </FormGroup>
//               <FormGroup label="Last Name">
//                 <Input
//                   type="text"
//                   name="lastName"
//                   placeholder="Enter your last name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   width="100%" // Lebar 100% dari elemen kontainer
//                   responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//                   required
//                 />
//               </FormGroup>
//             </div>
//             <FormGroup label="Email">
//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 width="100%" // Lebar 100% dari elemen kontainer
//                 responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//               />
//             </FormGroup>
//             <FormGroup label="Phone Number">
//               <Input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="Enter your phone number"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 width="100%" // Lebar 100% dari elemen kontainer
//                 responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//               />
//             </FormGroup>
//             <FormGroup label="Address">
//               <textarea
//                 name="address"
//                 placeholder="Enter your address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="border border-[#16697A] focus:ring-[#16697A] rounded-[15px] p-2 w-full"
//               />
//             </FormGroup>
//             <FormGroup label="Postal Code">
//               <Input
//                 type="text"
//                 name="postalCode"
//                 placeholder="Enter your postal code"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 width="100%" // Lebar 100% dari elemen kontainer
//                 responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//               />
//             </FormGroup>
//             <FormGroup label="Password">
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 width="100%" // Lebar 100% dari elemen kontainer
//                 responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//               />
//             </FormGroup>
//             <FormGroup label="Confirm Password">
//               <Input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 width="100%" // Lebar 100% dari elemen kontainer
//                 responsiveSize="md-lg" // Ukuran responsif antara medium dan large
//               />
//             </FormGroup>
//             {/* <div className="mb-4">
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   name="termsAccepted"
//                   className="form-checkbox text-blue-500"
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                 />
//                 <span className="ml-2 text-sm">
//                   By checking the box, I agree to the terms of sale and privacy
//                   policy
//                 </span>
//               </label>
//             </div> */}
//             <Button variant="primary" size="large" type="submit">
//               Sign Up
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
