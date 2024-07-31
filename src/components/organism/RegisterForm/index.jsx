import React, { useState } from "react";
import FormGroup from "../../molecules/FormGroup";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import logo from "../../../assets/LogoSmartLiving.svg";
import banner from "../../../assets/bannerRegister.svg"; // Pastikan Anda memiliki gambar banner di direktori ini

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika pendaftaran di sini
    alert(`Form data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex">
        {/* Banner */}
        <div className="hidden md:block w-[512px] h-[983px]">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-lg drop-shadow rounded-2xl w-[837px] h-[983px] mx-[26px] p-8 flex justify-center items-center relative">
          <form onSubmit={handleSubmit} className="w-full px-[132px]">
            <div className="flex lg:absolute top-4 right-4 pt-2 pr-7 pb-2">
              <p>
                Already have an account?{" "}
                <a href="" className="font-semibold text-bold underline">
                  Sign In
                </a>
              </p>
            </div>
            <div className=" justify-start mb-5">
              <h2 className="text-2xl font-bold">Welcome to SmartLiving</h2>
              <p>Please enter your details to create your account</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-4 mb-4">
              <FormGroup label="First Name">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  width={"242px"}
                  className="w-full"
                />
              </FormGroup>
              <FormGroup label="Last Name">
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  width={"242px"}
                />
              </FormGroup>
            </div>
            <FormGroup label="Email">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup label="Phone Number">
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup label="Address">
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="border border-[#16697A] focus:ring-[#16697A] rounded-[15px] p-2 w-full"
              />
            </FormGroup>
            <FormGroup label="Postal Code">
              <Input
                type="text"
                name="postalCode"
                placeholder="Enter your postal code"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup label="Password">
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup label="Confirm Password">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </FormGroup>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  className="form-checkbox text-blue-500"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <span className="ml-2 text-sm">
                  By checking the box, I agree to the terms of sale and privacy
                  policy
                </span>
              </label>
            </div>
            <Button variant="primary" size="large" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
