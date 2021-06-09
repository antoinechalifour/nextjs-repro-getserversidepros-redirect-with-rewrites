import Link from 'next/link'

export default function SomePage({ message }) {
    return <main>
        <h1>Hello {message}</h1>

        <ul>
            <li>
                <Link href='/some-other-page'>
                    <a>Go to other page</a>
                </Link>
            </li>

            <li>
                <Link href='/some-other-page?redirect=true'>
                    <a>Go to other page and redirect here</a>
                </Link>
            </li>
        </ul>


    </main>
}

export const getServerSideProps = ({ query }) => {
    const message = query.message || 'World'

    return {
        props: { message }
    }
}