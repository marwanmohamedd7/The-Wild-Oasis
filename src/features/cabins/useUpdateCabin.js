import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinDate, id }) => createUpdateCabin(newCabinDate, id),
    onError: () => toast.error("An error occurred while updating the cabin"),
    onSuccess: () => {
      toast.success("The cabin has been updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
  });
  return { updateCabin, isUpdating };
}
