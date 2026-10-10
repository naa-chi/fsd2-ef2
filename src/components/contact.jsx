import { useState } from 'react'

const media = [
  { label: "GitHub", href: "https://github.com/naa-chi" },
  { label: "LinkedIn", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },//no tengo jjajajajajajaja
  { label: "Eel", href: "https://eelslap.com/"}
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setForm((previous) => ({ ...previous, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Would send:', form)
        setSent(true)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact">
            <div className="container">
                <h2>Redes!</h2>

                <ul className="user__media">
                    {media.map((item) => (
                        <li key={item.label} className="tag">
                            <a href={item.href} target="_blank" rel="noreferrer">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <h2 className="section__title">Contacto</h2>
                <p className="section__subtitle">
                    Alguna cosa que me quieras decir?
                </p>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Su nombre</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="email">Correo</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn btn--primary" type="submit">
                        Enviaaaa
                    </button>

                    {sent && (
                        <p className="form__success">
                            Aaawgljdgndsgdf
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}