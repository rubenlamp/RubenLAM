import React from 'react';
import NextLink from 'next/link';
console.log('a Pasé por utils/link.js');

export default function Link({ children, href, ...other }) {
    console.log('b Pasé por utils/link.js');
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        return (
            <NextLink href={href}>
                <a {...other}>{children}</a>
            </NextLink>
        );
    }

    return (
        <a href={href} {...other}>
            {children}
        </a>
    );
}
