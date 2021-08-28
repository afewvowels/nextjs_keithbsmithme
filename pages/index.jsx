import Head from 'next/head'

import IconDecoratedText from '@components/elements/IconDecoratedText'

import styles from '@styles/pages.module.css'

const Home = () => {
  const iconDetails = [
    {
      'icon': ['fal', 'laptop-code'],
      'heading': 'Code',
      'text': [
        'I am an avid programmer. I work OOP principles and practices across several different languages depending on the platform and circumstance. I am familiar with Java, C-lang, Python and Javascript syntaxes.'
      ]
    },
    {
      'icon': ['fal', 'robot'],
      'heading': 'Robotics',
      'text': [
        'I enjoy working with ROS and ROS2 projects. I am familiar with RTABMap and basic movement node scripting to implement move_base type map navigation scripts.'
      ]
    },
    {
      'icon': ['fal', 'spray-can'],
      'heading': 'Printing',
      'text': [
        `I have experience with 3d modelling and 3d printing allowing me to design, model, produce and assemble my own robotics platforms. It's also helpful for projects around the house!`
      ]
    }
  ]

  return (<>
    <Head>
      <title>Home | Keith</title>
    </Head>
    <section className={styles.wrapper}>
      {/* <div className={styles.heroText}>
        <h2>Home</h2>
        <p>Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Ante metus dictum at tempor.</p>
        <p>Bibendum arcu vitae elementum curabitur vitae nunc sed velit.</p>
      </div> */}
      <div className={styles.threePartWrapper}>
        {iconDetails.map(iconDetail => {
          return <IconDecoratedText details={iconDetail}/>
        })}
      </div>
    </section>
  </>)
}

export default Home