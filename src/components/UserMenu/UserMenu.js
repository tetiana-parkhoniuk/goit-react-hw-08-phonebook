import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
    const avatar = defaultAvatar;
    
    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Welcome, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                Выйти
            </button>
        </div>
    );
}