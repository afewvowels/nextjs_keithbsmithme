import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@styles/elements.module.css'

const IconDecoratedText = ({details}) => {
  return(
    <div className={styles.iconDecoratedWrapper}>
      <span>
        <FontAwesomeIcon icon={[details.icon[0], details.icon[1]]}/>
      </span>
      <h3>{details.heading}</h3>
      {details.text.map(text => {
        return <p>{text}</p>
      })}
    </div>
  )
}

export default IconDecoratedText