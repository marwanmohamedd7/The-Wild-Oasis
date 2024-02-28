import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdatingSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onError: () => toast.error("Setting could not be updated"),
    onSuccess: () => {
      toast.success("Setting has been updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
  });
  return { updateSetting, isUpdating };
}
