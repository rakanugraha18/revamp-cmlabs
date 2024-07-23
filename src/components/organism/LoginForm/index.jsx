import React, { useState } from "react";
import FormGroup from "../../molecules/FormGroup";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-8 shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
