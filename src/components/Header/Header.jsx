import Link from "next/link"
import NavMain from "../NavMain/NavMain"
import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div className={`${styles.header} container`}>
                <Link href={'/'}>Logo</Link>
                <nav className={styles.nav}>
                    <NavMain />
                </nav>
            </div>
        </header>
    )
}

export default Header