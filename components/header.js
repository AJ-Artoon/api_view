import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.main} >
            <div className={styles.link}>
                <Link href="/">Home</Link>
                <Link href="/">Home1</Link>
            </div>
        </div>
    )
}

export default Header
