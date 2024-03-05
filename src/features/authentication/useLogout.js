import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Logout as LogoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: Logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err);
    },
  });
  return { Logout, isLoggingOut };
}
