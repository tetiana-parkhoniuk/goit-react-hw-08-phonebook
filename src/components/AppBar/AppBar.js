import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import { authSelectors } from "redux/auth";
import { AppBar } from "@material-ui/core";
import styles from './AppBar.module.css';



export default function AppBarMui() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <AppBar>
            <div className={styles.appBar}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </AppBar>
    );
}