import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
// import styles from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;
    
    return (
        <div>
            <img src={avatar} alt="" width="32" />
            <span>Welcome, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logout())}>
                Log Out
            </button>
        </div>
    );
}