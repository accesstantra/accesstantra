// Past events / programmes, newest first. Each renders as a card on the
// /past-events page (4 shown at a time, "View more" reveals more).
// Shape: { id, title, date, summary, winners?: string[], youtubeId }

const pastEvents = [
  {
    id: 'helen-keller-day-2026',
    title: 'Helen Keller Day Special Programme',
    date: '28 June 2026',
    summary:
      'Accessible Tantra hosted a special online programme for Helen Keller Day — remembering her journey, celebrating her contributions, and closing with a warm quiz competition. The session was broadcast live and drew 80 participants who registered via Google Form.',
    winners: [
      '1st prize — Mohd Hashif (Uttar Pradesh)',
      '2nd prize — Nitu Kumari (Bihar)',
      '3rd prize — Kuldeep Behera (Chandigarh)',
    ],
    youtubeId: 'm_0UUjlJpkU',
  },
]

export default pastEvents
