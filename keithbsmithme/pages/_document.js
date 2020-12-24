import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps } 
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Header />
                    <Main />
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument