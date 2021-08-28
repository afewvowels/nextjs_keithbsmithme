import Link from 'next/link'

import styles from '@styles/templates.module.css'

const Navbar = () => {
  const pages = ['code', 'robotics', 'printing']

  return(
    <nav className={styles.navbar}>
      <ul>
        {pages.map((item) => {
          return(
            <Link href={`/${item}`}>
              <li>{item}</li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar