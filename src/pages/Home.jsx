import './Home.css'

function Home() {
  return (
    <main className="home">
      <div className="home__backdrop" aria-hidden="true">
        <span className="home__orb home__orb--one" />
        <span className="home__orb home__orb--two" />
        <span className="home__orb home__orb--three" />
      </div>

      <section className="home__card">
        <h1 className="home__title">
          Welcome to <span className="home__brand">Access Tantra</span>
        </h1>

        <p className="home__subtitle">
          Our website is currently undergoing maintenance.
          <br />
          We&rsquo;re polishing things up and will be back online shortly.
        </p>

        <div className="home__progress" aria-hidden="true">
          <span className="home__progress-bar" />
        </div>

        <p className="home__note">Thank you for your patience.</p>
      </section>

      <footer className="home__footer">
        © {new Date().getFullYear()} Access Tantra. All rights reserved.
      </footer>
    </main>
  )
}

export default Home
