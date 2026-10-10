const skills = ['HTML', 'CSS', 'Git', 'Python', 'C++', 'Comparador en Minecraft', 'Bilingualismo Ingles/Español', 'Lingüistica básica']

export default function About() {
    return (
        <section id="about">
        <div className="container">
            <h2 className="section__title">Acerca de</h2>
            <p className="section__subtitle">~Lore~</p>

            <div className="about">
            <p>
                Aprendí que me interesaba la programación cuando era chico y jugaba Minecraft. 
                Queria aplicar mods al juego y tenia que aprender cómo funcionaban los computadores.

                Aprendí Python en un liceo tecnico!!!
            </p>
            <p>
                Me gustan los gatos :D
            </p>
                <p>A parte de programar, me tengo 2 juegos favoritos!!!</p>
                <ul className = "about__list__likes">
                    <li>
                        <a href="https://warthunder.com/en">War Thunder</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Kerbal_Space_Program">Kerbal Space Program</a>
                    </li>
                </ul>
            <h3 className="about__label">Cosas que quizás pueda usar</h3>
            <ul className="skills">
                {skills.map((skill) => (
                <li key={skill} className="tag">
                    {skill}
                </li>
                ))}
            </ul>
            </div>
        </div>
        </section>
    )
}