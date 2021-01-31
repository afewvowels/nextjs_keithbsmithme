import Link from 'next/link'

const fourohfour = () => {
  return(<>
    <h1>404</h1>
    <p>Page not found</p>
    <Link href='/'>
      <button>Go Home</button>
    </Link>
  </>)
}

export default fourohfour