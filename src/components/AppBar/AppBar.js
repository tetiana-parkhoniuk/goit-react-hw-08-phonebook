import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";

export default function AppBar() {
    return (
        <header>
            <Navigation />
            <UserMenu />
            <AuthNav />
        </header>
    );
}