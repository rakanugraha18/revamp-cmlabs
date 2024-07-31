import React, { useState } from "react";
import FormGroup from "../../molecules/FormGroup";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import logo from "../../../assets/LogoSmartLiving.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Login" className="w-[530px]" />
      </div>
      <FormGroup label="Email">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup label="Password">
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <div className="pb-4">
        <a href="#" className="text-sm">
          Forgot your password?
        </a>
      </div>
      <div className="mb-4 items-start pb-14">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <span className="ml-2 text-sm">Stay logged in</span>
        </label>
      </div>
      <Button variant="primary" size="large" type="submit">
        Sign In
      </Button>
      <div className="pt-14 flex justify-center">
        <p>
          {" "}
          Don’t have an account?{" "}
          <a href="#" className="font-semibold">
            {" "}
            Sign up Now
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
