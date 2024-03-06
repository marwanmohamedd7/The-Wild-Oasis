import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading: isSigningUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success("Account has been succefully created");
    },
    onError: () =>
      toast.error("An error occurred while creating the account"),
  });
  return { signUp, isSigningUp };
}

