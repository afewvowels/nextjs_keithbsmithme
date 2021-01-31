import Header from '@components/templates/Header'
import Footer from '@components/templates/Footer'

import styles from '@styles/templates.module.css'

const Layout = ({children}) => {
  return(<>
    <Header/>
    <main className={styles.layoutMain}>{children}</main>
    <Footer/>
  </>)
}

export default Layout