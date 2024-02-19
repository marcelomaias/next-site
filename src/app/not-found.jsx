import Link from 'next/link'
import React from 'react'

function notFound() {
    return (
        <div className="container">
            <h1>Page not found.</h1>
            <Link href={'/'}>Return to Homepage.</Link>
        </div>
    )
}

export default notFound