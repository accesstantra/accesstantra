import { YOUTUBE_URL } from './site.js'

// Courses live under /courses (a separate section from Programs). Each course
// renders via ContentPage at /courses/<id>. `upcoming: true` lists it on the
// Courses landing page; the landing always shows the standing links below.

const courses = [
  {
    id: 'excel',
    navLabel: 'Excel Training',
    title: 'Free 21-Day Intermediate to Advanced Excel Training',
    subtitle: 'Online training designed for visually impaired learners and screen reader users.',
    upcoming: true,
    tagline: 'Practical, screen-reader-friendly Excel for education and the workplace.',
    meta: { Starts: '21 June', Cost: 'Free', 'Phone / WhatsApp': '+91 9910731239' },
    intro:
      'A free online program for learners who already know basic Excel and want practical, screen-reader-friendly skills for education and the workplace. The focus is keyboard-based learning and real office tasks.',
    sections: [
      {
        heading: 'What you will learn',
        list: [
          'Large data handling and data analysis',
          'Advanced formatting, sorting and filtering',
          'Data validation and error control',
          'Lookup and cross-worksheet data management',
          'Goal Seek and scenario analysis',
          'Charts, reporting and dashboard concepts',
          'Productivity tools and keyboard shortcuts',
          'Practical techniques for screen reader users',
        ],
      },
      {
        heading: 'Who can join',
        list: [
          'Visually impaired students and job seekers',
          'Working professionals, teachers and trainers',
          'NGO, office and banking staff',
          'Anyone looking to improve their Excel skills',
        ],
      },
    ],
    formHeading: 'Registration form',
    formIntro: 'Seats are limited. Please fill in your details below to register.',
    formIntroHi:
      'सीटें सीमित हैं। पंजीकरण के लिए कृपया नीचे अपना विवरण भरें।',
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSeyrZ4wZM7yHPWP80ts6sJ95fFZc9JgVsvIRsiWBv8NrIfkBQ/viewform?embedded=true',
    },
  },

  {
    id: 'customised-training',
    navLabel: 'Customised Training Request',
    title: 'Customised Training Request',
    subtitle: 'Training tailored to your needs or your organisation’s.',
    upcoming: false,
    tagline: 'Request accessible training designed around your requirements.',
    intro:
      'Tell us what you or your institution need, and we’ll design accessible, screen-reader-friendly training to match — for individuals, teams, or educational institutes.',
    formHeading: 'Request customised training',
    formIntro:
      'Share your requirements using the form below and our team will get in touch.',
    formIntroHi:
      'नीचे दिए गए फ़ॉर्म के माध्यम से अपनी आवश्यकताएँ साझा करें और हमारी टीम आपसे संपर्क करेगी।',
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSdBxDcEx5-Z_MwteciobqalonxLLCXGIpbEesVNkD_VCJOSaA/viewform?embedded=true',
    },
  },
]

// Configuration for the /courses landing page.
export const coursesLanding = {
  title: 'Courses',
  intro:
    'Skill-building courses from Accessible Tantra. Browse our upcoming courses below, request training tailored to your needs, or explore our YouTube channel for free tutorials.',
  noCoursesMessage: 'There are no upcoming courses at the moment. Please check back soon.',
  standingLinks: [
    { label: 'Request customised training', to: '/courses/customised-training', variant: 'primary' },
    { label: 'Visit our YouTube channel', href: YOUTUBE_URL, variant: 'outline' },
  ],
}

export function getCourse(id) {
  return courses.find((course) => course.id === id)
}

export default courses
