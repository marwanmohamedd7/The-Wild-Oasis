import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";
function useTodayActivity() {
  const { data: activities, isLoading } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today_activity"],
  });
  return { activities, isLoading };
}

export default useTodayActivity;
