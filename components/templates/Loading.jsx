import { useSpring, useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@styles/templates.module.css'

const Loading = ({loading}) => {
  const transitions = useTransition(loading, null, {
    from: { opacity: 0, transform: 'translateX(40px) scale(1.0)' },
    enter: { opacity: 1, transform: 'translateX(0px) scale(1.0)' },
    leave: { opacity: 0, transform: 'translateX(40px) scale(1.0)' },
  })

  return(<>
    {transitions.map(({item, key, props}) => (
      item &&
      <span key={key} className={styles.loadingSpan} style={props}>
        <FontAwesomeIcon icon={['fal', 'asterisk']}/>
      </span>
    ))}
  </>)
}

export default Loading