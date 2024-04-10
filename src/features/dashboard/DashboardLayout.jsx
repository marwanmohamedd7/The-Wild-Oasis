import { useRecentStays } from "./useRecentStays";
import { useGetCabins } from "../cabins/useGetCabins";
import { useRecentBookings } from "./useRecentBookings";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { cabins, isLoading: isGettingCabins } = useGetCabins();
  const { confirmedStays, isLoading: isGettingStays } = useRecentStays();
  const { bookings, numDays, isLoading: isGettingBookings } = useRecentBookings();
  if (isGettingBookings || isGettingStays || isGettingCabins) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
