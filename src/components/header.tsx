import logo from '../assets/Logo.svg'
import styles from './header.module.scss'

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" />
        </header>
    )
}