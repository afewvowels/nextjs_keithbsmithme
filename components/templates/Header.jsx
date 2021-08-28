import Head from 'next/head'

import Link from 'next/link'

import Navbar from '@components/templates/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@styles/templates.module.css'

const Header = () => {
  return(<>
    <Head>
      <title>Home | Keith Smith</title>
    </Head>
    <header className={styles.header}>
      <Link href='/'>
        <span className={styles.headerTitleSpan}>
          <h1>Keith Smith</h1>
        </span>
      </Link>
      <Navbar/>
    </header>
  </>)
}

export default Header