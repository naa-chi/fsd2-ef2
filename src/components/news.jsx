import { news } from '../data/news'

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <h2 className="section__title">Noticias</h2>
        <p className="section__subtitle">Cositas que sucedieron</p>

        <ul className="news__list">
          {news.map((item) => (
            <li key={item.id} className="news__item">
              <time className="news__date" dateTime={item.date}>
                {formatDate(item.date)}
              </time>
              <h3 className="news__headline">{item.title}</h3>
              <p className="news__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}