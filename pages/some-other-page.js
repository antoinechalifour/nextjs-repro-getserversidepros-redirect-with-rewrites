export default function SomeOtherPage() {
    return <h1>Some other page</h1>
}

export const getServerSideProps = ({ query }) => {
    if (query.redirect) {
        return {
            redirect: {
                /*
                When using / (which has a rewrite to /some-page in next.config.js) then there is a full reload
                when navigating from the client side.
                */
                destination: '/',

                /*
                When using /some-page directly, there is a client side navigation fetch the server side 
                props (some-page.json in the network devtools).
                So its working, but the URL on the client side is /some-page
                */
                destination: '/some-page',
                permanent: false
            }
        }
    }

    return { props: {} }
}