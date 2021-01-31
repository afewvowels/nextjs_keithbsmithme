import Head from 'next/head'

import IconDecoratedText from '@components/elements/IconDecoratedText'

import styles from '@styles/pages.module.css'

const Home = () => {
  const iconDetails = [
    {
      'icon': ['fal', 'asterisk'],
      'heading': 'heading',
      'text': [
        'Bibendum arcu vitae elementum curabitur vitae nunc sed velit.'
      ]
    },
    {
      'icon': ['fal', 'asterisk'],
      'heading': 'heading',
      'text': [
        'Bibendum arcu vitae elementum curabitur vitae nunc sed velit.'
      ]
    },
    {
      'icon': ['fal', 'asterisk'],
      'heading': 'heading',
      'text': [
        'Bibendum arcu vitae elementum curabitur vitae nunc sed velit.'
      ]
    }
  ]

  return (<>
    <Head>
      <title>Home | Keith</title>
    </Head>
    <section className={styles.wrapper}>
      <div className={styles.heroText}>
        <h2>Home</h2>
        <p>Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Ante metus dictum at tempor.</p>
        <p>Bibendum arcu vitae elementum curabitur vitae nunc sed velit.</p>
      </div>
      <div className={styles.threePartWrapper}>
        {iconDetails.map(iconDetail => {
          return <IconDecoratedText details={iconDetail}/>
        })}
      </div>
    </section>
  </>)
}

export default Home