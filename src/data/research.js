// Research & Survey — a standalone page (its own navbar item) rendered by
// ContentPage at /research. Add new surveys/studies as extra `sections` or
// `ctas`. External survey links use `href` (open in a new tab); the Google
// Form requires sign-in, so we link out to it rather than embedding it.

const research = {
  title: 'Research & Survey',
  subtitle:
    'Accessible Tantra runs research and surveys to better understand accessibility needs and shape our work.',
  intro: [
    'Research helps us understand the real experiences, needs, and barriers faced by persons with disabilities. The insights we gather guide our programmes, training, advocacy, and collaborations, so that our efforts remain grounded in lived experience.',
    'From time to time we invite the community to take part in surveys and studies. Your responses are valuable and help make systems and spaces more accessible for everyone.',
  ],
  sections: [
    {
      heading: 'Current survey',
      body:
        'We are currently inviting participation in a survey to better understand accessibility needs, experiences, and challenges. Your input will directly inform our future initiatives and recommendations. The survey is short, and your responses are appreciated. We kindly invite you to participate and take this survey using the link below.',
    },
  ],
  ctas: [
    {
      label: 'Take the survey',
      href: 'https://forms.gle/ywYXiVp8TvJH86ip9',
      variant: 'primary',
    },
  ],
  returnHome: true,
}

export default research
