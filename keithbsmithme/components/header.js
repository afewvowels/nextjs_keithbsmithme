import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.root}>
            {/* <div className={styles.branding}> */}
                {/* <p className={styles.logo}>K</p> */}
                <h1 className={styles.title}>Keith B. Smith</h1>
            {/* </div> */}
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/printers'>Printers</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
        </header>
    )
}