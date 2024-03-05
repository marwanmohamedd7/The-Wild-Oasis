import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as LoginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: Login, isLoading: isLogingIn } = useMutation({
    mutationFn: LoginApi, // function that returns a promise
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("Invalid email or password");
      console.log("ERROR", err);
    },
  });
  return { Login, isLogingIn };
}
