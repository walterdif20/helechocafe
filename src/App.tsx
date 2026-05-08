import { siteConfig } from './config/site';
import './styles/global.css';

const menuCategories = ['Café y bebidas calientes', 'Pastelería artesanal', 'Desayunos', 'Almuerzos livianos', 'Meriendas', 'Opciones veganas'];

const faqs = [
  ['¿Dónde queda Helecho Café?', `Estamos en ${siteConfig.address}, en pleno centro de ${siteConfig.city}.`],
  ['¿Qué se puede merendar?', 'Tenemos meriendas con café, infusiones, pastelería artesanal y opciones más saludables.'],
  ['¿Tiene opciones veganas?', 'Sí, contamos con opciones veganas. Consultanos la disponibilidad del día.'],
  ['¿Tiene opciones sin TACC?', 'Consultá disponibilidad de opciones sin TACC.'],
  ['¿Cuál es el horario?', 'Lunes a sábado de 8:00 a 14:00 y de 16:00 a 20:00.'],
  ['¿Está en el centro de Necochea?', 'Sí, en Calle 64 entre Av. 59 y calle 61, zona céntrica.'],
  ['¿Se puede pedir por delivery?', 'Sí, podés consultar delivery y opciones de pedido por plataformas externas.'],
];

function App() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: siteConfig.businessName,
    image: `${siteConfig.canonicalUrl}/assets/hero-cafe.svg`,
    url: siteConfig.canonicalUrl,
    sameAs: [siteConfig.instagramUrl],
    servesCuisine: ['cafetería', 'pastelería artesanal', 'opciones veganas'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: 'AR',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '14:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '16:00', closes: '20:00' },
    ],
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="header">
        <a href="#inicio" className="logo">Helecho Café</a>
        <nav>
          <a href="#inicio">Inicio</a><a href="#propuesta">Propuesta</a><a href="#carta">Carta</a><a href="#ubicacion">Ubicación</a><a href="#horarios">Horarios</a><a href="#contacto">Contacto</a>
        </nav>
        <div className="actions"><a className="btn primary" href={siteConfig.mapsUrl}>Cómo llegar</a><a className="btn" href={siteConfig.instagramUrl}>Instagram</a></div>
      </header>
      <main>
        <section id="inicio" className="hero"><p>{siteConfig.tagline}</p><h1>Helecho Café: cafetería y pastelería artesanal en Necochea</h1><p>{siteConfig.description}</p><p className="microdato">📍 {siteConfig.address}</p></section>
        <section className="cards"><article>🌿<h2>Pastelería artesanal</h2><p>Elaboraciones cuidadas, frescas y con identidad propia.</p></article><article>🥬<h2>Opciones veganas</h2><p>Alternativas pensadas para que más personas puedan disfrutar.</p></article><article>✨<h2>Sin conservantes</h2><p>Pastelería saludable con sabores equilibrados.</p></article><article>☕<h2>Todo el día</h2><p>Desayunos, almuerzos y meriendas en el centro de Necochea.</p></article></section>
        <section id="propuesta"><h2>Nuestra propuesta</h2><p>Un espacio cálido para hacer una pausa: café rico, pastelería hecha con amor y opciones saludables para compartir en familia o con amigos.</p></section>
        <section id="carta"><h2>Carta orientativa</h2><ul>{menuCategories.map((item) => <li key={item}>{item}</li>)}</ul><p>La carta puede cambiar según disponibilidad y producción del día.</p></section>
        <section id="ubicacion"><h2>Ubicación</h2><p>{siteConfig.address}, {siteConfig.city}. En pleno centro de Necochea.</p><iframe title="Mapa de Helecho Café en Necochea" src="https://www.google.com/maps?q=Helecho%20Caf%C3%A9%20Calle%2064%20entre%2059%20y%2061%20Necochea&output=embed" loading="lazy"/></section>
        <section id="horarios"><h2>Horarios</h2><p>Lunes a sábado de 8:00 a 14:00 y de 16:00 a 20:00.</p><p>Los horarios pueden variar en feriados; confirmá por Instagram.</p></section>
        <section id="contacto"><h2>Contacto</h2><div className="actions"><a className="btn primary" href={siteConfig.instagramUrl}>Ver Instagram</a><a className="btn" href={siteConfig.mapsUrl}>Cómo llegar</a><a className="btn" href={siteConfig.deliveryUrl}>Consultar delivery</a></div></section>
        <section><h2>Preguntas frecuentes</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      </main>
      <footer><p><strong>{siteConfig.businessName}</strong> · {siteConfig.category}</p><p>{siteConfig.address}, {siteConfig.city}, {siteConfig.region}, {siteConfig.country}</p><p>Horario: lunes a sábado de 8:00 a 14:00 y de 16:00 a 20:00</p></footer>
    </>
  );
}

export default App;
