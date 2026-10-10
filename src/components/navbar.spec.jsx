import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
    it('renders the logo', () => {
        render(<Navbar />)
        expect(screen.getByText('AC')).toBeInTheDocument()
    })

    it('renders all three nav links', () => {
        render(<Navbar />)
        expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    })

    it('adds the is-open class to the nav when the toggle is clicked', () => {
        render(<Navbar />)

        const toggle = screen.getByRole('button', { name: /toggle menu/i })
        const nav = screen.getByRole('navigation')

        expect(nav.className).not.toContain('is-open')

        fireEvent.click(toggle)

        expect(nav.className).toContain('is-open')
    })
})