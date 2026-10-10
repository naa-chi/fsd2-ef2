import pfp from   '../assets/flashbang.gif'
import meIrl from '../assets/cat.jpg'

export default function Hero() {
    return (
        <section className="hero container" id="top">
        <p className="hero__eyebrow">Dev o algo nc</p>
        <img 
            className = "hero__pfp"
            src={pfp}
            alt="Cool pic here"></img>
        <h1>
            Ey muy buenas a todos guapisimos soy Dxsnnr
            <br />
            y hago algunas cosas
        </h1>
        <p>
            Estudiando en Duoc UC, no me gustan las interfaces bonitas por que no se hacerlas. Adieu
        </p>

        <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
            Mira lo que hice :D
            </a>
            <a className="btn" href="#contact">
            Tócame..
            </a>
        </div>
            <img
                className = "hero__irl"
                src = {meIrl}
                alt = "meIrl"></img>
        </section>
    )
}