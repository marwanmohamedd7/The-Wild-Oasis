import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon"
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
    const { Logout, isLoggingOut } = useLogout()
    return (
        <ButtonIcon onClick={Logout} disabled={isLoggingOut}>
            {isLoggingOut ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
        </ButtonIcon>
    )
}

export default Logout
