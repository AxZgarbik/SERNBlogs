import styles from '../../styles/Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>SERN Blogs</Link>

                <div className={styles.options}>
                    <Link to="/login" className={styles.link}>Iniciar sesión</Link>
                    <Link to="/sing-in" className={styles.link}>Registrarse</Link>
                </div>
            </div>
        </header>
    );
}
 
export default Header;