// Research & Survey — a standalone page (its own navbar item) rendered by
// ContentPage at /research. Add new surveys/studies as extra `sections` or
// `ctas`. The Google Form is embedded (type: 'embed'); it is multi-section, and
// Google handles the "Next" navigation and section branching inside the iframe,
// so it naturally starts on the first section. A "new tab" CTA is kept as a
// fallback for anyone who prefers the full-page form.

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
      ],
    },
  ],
  formHeading: 'Take the survey',
  formIntro:
    'We kindly invite you to participate and take this survey using the form below. It has multiple sections — answer the questions in the first section and select Next to continue; the form will guide you to the sections relevant to you. You can also open the survey in a new tab using the link below the form.',
  form: {
    type: 'embed',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSd6D5rWYyzaayo4zIP10c3FPbSrCN8R61SXylopNUwU3YkTyA/viewform?embedded=true',
  },
  ctas: [
    {
      label: 'Open the survey in a new tab',
      href: 'https://forms.gle/ywYXiVp8TvJH86ip9',
      variant: 'outline',
    },
  ],
  returnHome: true,
}

export default research

