// ─────────────────────────────────────────────────────────────────────────────
// Programs — fully pluggable. Each entry becomes an item in the header
// "Programs" dropdown and a page at /programs/<id>.
//
// • To REMOVE a program:  delete its object. Its nav item and page disappear
//   automatically; the whole "Programs" menu hides when none remain.
// • To ADD / REPLACE one:  add an object with a unique `id`, page content, and
//   a `form` block.
//
// A program's `form` is one of two kinds:
//   • { type: 'native', action, fields }  — our own accessible fields that POST
//       straight to a Google Form's formResponse endpoint (entry.<id> mapping).
//       Best UX, but the Google Form must allow anonymous submits ("Collect
//       email addresses" = Do not collect) and the entry ids must be kept current.
//   • { type: 'embed', src }              — the Google Form embedded in an
//       iframe (viewform?embedded=true). Works regardless of the form's email
//       settings and needs no entry-id maintenance.
// ─────────────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: 'excel',
    navLabel: 'Excel Training',
    title: 'Free 21-Day Intermediate to Advanced Excel Training',
    subtitle: 'Online training designed for visually impaired learners and screen reader users.',
    meta: { Starts: '21 June', Cost: 'Free', 'Phone / WhatsApp': '+91 9910731239' },
    intro:
      'A free online program for learners who already know basic Excel and want practical, screen-reader-friendly skills for education and the workplace. The focus is keyboard-based learning and real office tasks.',
    learn: [
      'Large data handling and data analysis',
      'Advanced formatting, sorting and filtering',
      'Data validation and error control',
      'Lookup and cross-worksheet data management',
      'Goal Seek and scenario analysis',
      'Charts, reporting and dashboard concepts',
      'Productivity tools and keyboard shortcuts',
      'Practical techniques for screen reader users',
    ],
    audience: [
      'Visually impaired students and job seekers',
      'Working professionals, teachers and trainers',
      'NGO, office and banking staff',
      'Anyone looking to improve their Excel skills',
    ],
    highlights: [
      'Online and free of cost',
      'Screen reader friendly',
      'Practice sheets and assignments',
      'Real-life practical examples',
    ],
    formHeading: 'Registration form',
    formIntro: 'Seats are limited. Please fill in your details below to register.',
    form: {
      type: 'native',
      action:
        'https://docs.google.com/forms/d/e/1FAIpQLSeyrZ4wZM7yHPWP80ts6sJ95fFZc9JgVsvIRsiWBv8NrIfkBQ/formResponse',
      fields: [
        { entry: 'entry.486980869', label: 'Full Name', type: 'text', required: true, autoComplete: 'name' },
        { entry: 'entry.1456707284', label: 'Gender', type: 'radio', options: ['Male', 'Female'] },
        { entry: 'entry.201391119', label: 'WhatsApp Number', type: 'tel', required: true, autoComplete: 'tel' },
        { entry: 'entry.1915218494', label: 'Email Address', type: 'email', required: true, autoComplete: 'email' },
        {
          entry: 'entry.450056905',
          label: 'What do you currently do?',
          type: 'radio',
          options: ['Student', 'Working Professional', 'Job Seeker', 'Other'],
        },
        {
          entry: 'entry.1761800473',
          label: 'Current level of Excel knowledge',
          type: 'radio',
          options: ['Basic', 'Intermediate', 'Advanced'],
        },
        {
          entry: 'entry.461607842',
          label: 'Preferred class timing',
          type: 'radio',
          options: [
            '5:30 PM – 6:30 PM',
            '6:00 PM – 7:00 PM',
            '8:00 PM – 9:00 PM',
            'Only Saturday & Sunday',
            'Any Time',
          ],
        },
        {
          entry: 'entry.697407924',
          label: 'What do you expect from this training program?',
          type: 'textarea',
        },
        {
          entry: 'entry.1177804315',
          label: 'Confirmation',
          type: 'checkbox',
          value: 'Yes, I confirm',
          checkboxLabel:
            'I confirm that I have basic computer knowledge and a basic understanding of Excel.',
          required: true,
        },
      ],
    },
  },

  {
    id: 'mentorship',
    navLabel: 'Mentorship Program',
    title: 'Mentorship Program',
    subtitle: 'Guidance from experienced mentors — for students, professionals, and parents.',
    intro:
      'Our mentorship program pairs you with experienced mentors who have excelled in their fields, offering practical guidance for education, careers, and supporting differently-abled family members.',
    audience: [
      'Students seeking academic and career direction',
      'Professionals growing in their careers',
      'Parents supporting a differently-abled child',
    ],
    formHeading: 'Register for mentorship',
    formIntro: 'Fill in the form below to join the mentorship program.',
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLScV4EpmpbR3Qt29IbEwzNdxJ8iZm4VnKuTyqfGhAhZi21FIAw/viewform?embedded=true',
    },
  },

  {
    id: 'customised-training',
    navLabel: 'Customised Training Request',
    title: 'Customised Training Request',
    subtitle: 'Training tailored to your needs or your organisation’s.',
    intro:
      'Tell us what you or your institution need, and we’ll design accessible, screen-reader-friendly training to match — for individuals, teams, or educational institutes.',
    formHeading: 'Request customised training',
    formIntro: 'Share your requirements using the form below and our team will get in touch.',
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSdBxDcEx5-Z_MwteciobqalonxLLCXGIpbEesVNkD_VCJOSaA/viewform?embedded=true',
    },
  },
]

export function getProgram(id) {
  return programs.find((program) => program.id === id)
}

export default programs
