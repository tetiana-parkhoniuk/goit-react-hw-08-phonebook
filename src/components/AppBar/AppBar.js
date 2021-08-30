import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import { authSelectors } from "redux/auth";

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}