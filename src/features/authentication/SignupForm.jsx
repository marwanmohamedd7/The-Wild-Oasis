import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { signUp, isSigningUp } = useSignup()
  const { errors } = formState
  function onSubmit({ fullName, email, password }) {
    // You can send the data to your backend
    signUp({ fullName, email, password }, {
      onSettled: () => reset(),
    })
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input disabled={isSigningUp} type="text" id="fullName" {...register('fullName', {
          required: "This field is required"
        })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input disabled={isSigningUp} type="email" id="email" {...register('email', {
          required: "This field is required", pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email address"
          }
        })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input disabled={isSigningUp} type="password" id="password" {...register('password', {
          required: "This field is required", minLength: {
            value: 8,
            message: "Password needs a minimum of characters",
          }
        })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input disabled={isSigningUp} type="password" id="passwordConfirm" {...register('passwordConfirm', {
          required: "This field is required", validate: {
            checkPassword: (value) => value === getValues().password || "Passwords do not match"
          }
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={reset} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isSigningUp}>{isSigningUp ? <SpinnerMini /> : `Create new user`}</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
