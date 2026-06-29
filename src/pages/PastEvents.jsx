import { useState } from 'react'
import pastEvents from '../data/pastEvents.js'

const PAGE_SIZE = 4

function PastEvents() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visible = pastEvents.slice(0, visibleCount)
  const hasMore = visibleCount < pastEvents.length

  return (
    <>
      <section className="page-hero" aria-labelledby="past-title">
        <div className="container">
          <h1 id="past-title">Past Events</h1>
          <p className="lead">
            A look back at programmes and events hosted by Accessible Tantra — with recordings
            where available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {pastEvents.length === 0 ? (
            <p className="lead">No past events yet. Please check back soon.</p>
          ) : (
            <>
              <ul className="grid card-list" role="list">
                {visible.map((event) => (
                  <li key={event.id} className="card">
                    <h2>{event.title}</h2>
                    <p className="content-meta">{event.date}</p>
                    <p>{event.summary}</p>

                    {event.winners && event.winners.length > 0 && (
                      <>
                        <h3>Winners</h3>
                        <ul>
                          {event.winners.map((winner) => (
                            <li key={winner}>{winner}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {event.youtubeId && (
                      <div className="video-embed">
                        <iframe
                          src={`https://www.youtube.com/embed/${event.youtubeId}`}
                          title={`${event.title} — recording`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {hasMore && (
                <div className="btn-row">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  >
                    View more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default PastEvents
