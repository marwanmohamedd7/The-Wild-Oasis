import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat"
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"

function Stats({ bookings, confirmedStays, cabinCount, numDays }) {
    // 1. number of bookings
    const numBookings = bookings.length

    // 2. total sales
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

    //3. total check-ins
    const checkins = confirmedStays.length;

    // 4. occupancy rate
    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0);
    const occupancyRate = occupation / (numDays * cabinCount);


    // num checked in nights / all available nights (number of days * number of cabins)


    return (
        <>
            <Stat title="Bookings"
                color="blue"
                icon={<HiOutlineBriefcase />}
                value={numBookings}
            />
            <Stat title="Sales"
                color="green"
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat title="Check Ins"
                color="indigo"
                icon={<HiOutlineCalendarDays />}
                value={checkins}
            />
            <Stat title="Occupancy Rate"
                color="yellow"
                icon={<HiOutlineChartBar />}
                value={Math.round(occupancyRate * 100) + '%'}
            />
        </>
    )
}

export default Stats
