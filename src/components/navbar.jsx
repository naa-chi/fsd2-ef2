import { useState } from 'react'

const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="navbar">
        <div className="container navbar__inner">
            <a href="#top" className="navbar__logo">
            AC
            </a>
            <button
            className="navbar__toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            >
            {open ? '✕' : '☰'}
            </button>

            <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
            {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                </a>
            ))}
            </nav>
        </div>
        </header>
    )
}