import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";


function LoginForm() {
  // public email: newuser5@gmail.com
  // public password: newuser5
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, isLogingIn } = useLogin()

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    // TODO: Implement login logic here (
    Login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          disabled={isLogingIn}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          disabled={isLogingIn}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large"
          disabled={isLogingIn}
        >{isLogingIn ? <SpinnerMini /> : "login"}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
