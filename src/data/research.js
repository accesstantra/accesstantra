// Research & Survey — a standalone page (its own navbar item) rendered by
// ContentPage at /research. Add new surveys/studies as extra `sections` or
// `ctas`. External survey links use `href` (open in a new tab); the Google
// Form is linked out to rather than embedded (it records the responder's
// Google account and may require sign-in).

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
      heading:
        'Survey of Accessible Schooling in Blind Schools Across India',
      body: [
        'We are currently conducting a nationwide survey of accessible schooling in blind schools across India. Your participation is vital to the success of this initiative.',
        'We sincerely request every school administration, principal, headmaster, teacher, staff member, student, and parent to complete this questionnaire honestly and accurately. Please provide true information based on the actual conditions of your school or institution, without any fear, hesitation, bias, prejudice, or preconceived notions.',
        'Please note: this survey is not an inspection, audit, ranking, accreditation exercise, or evaluation of any school. The information collected will be used solely for research, policy advocacy, and improving educational opportunities for students with visual impairments. Individual responses and institutional information will be treated with due confidentiality and will not be used to unfairly judge or disadvantage any school.',
        'Your honest participation today can help shape better policies, strengthen educational institutions, mobilise meaningful support, and create a more accessible future for present and future generations of blind and visually impaired students.',
        'We kindly invite you to participate and take this survey using the link below.',
      ],
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
