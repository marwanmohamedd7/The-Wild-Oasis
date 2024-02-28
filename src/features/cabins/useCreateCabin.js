import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateCabin,
    onError: () => toast.error("An error occurred while creating the cabin"),
    onSuccess: () => {
      toast.success("The cabin has been created successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
  });
  return { createCabin, isCreating };
}
