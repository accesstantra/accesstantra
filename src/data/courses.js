// ─────────────────────────────────────────────────────────────────────────────
// Courses — fully pluggable.
//
// • To REMOVE a course:   delete its object from the `courses` array below.
//   The "Courses" nav dropdown and its page disappear automatically; if the
//   array becomes empty, the whole "Courses" menu is hidden.
// • To ADD / REPLACE one:  add an object with a unique `id`, the page content,
//   and a `form` definition. The Excel one below is a complete example.
//
// The registration form submits directly to a Google Form. To wire a new form:
//   1. Open the live Google Form, View Source, find `FB_PUBLIC_LOAD_DATA_`.
//   2. The action URL is /forms/d/e/<FORM_ID>/formResponse.
//   3. Each question has an `entry.<number>` id — map them to fields below.
// (For the Excel form these were extracted from forms.gle/3rZzPVYd4J7qiVYM7.)
// ─────────────────────────────────────────────────────────────────────────────

const courses = [
  {
    id: 'excel',
    navLabel: 'Excel Training',
    title: 'Free 21-Day Intermediate to Advanced Excel Training',
    subtitle: 'Online training designed for visually impaired learners and screen reader users.',
    startDate: '21 June',
    contact: '+91 9910731239',
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
    form: {
      action:
        'https://docs.google.com/forms/d/e/1FAIpQLSeyrZ4wZM7yHPWP80ts6sJ95fFZc9JgVsvIRsiWBv8NrIfkBQ/formResponse',
      // Order = display order on the page.
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
]

export function getCourse(id) {
  return courses.find((course) => course.id === id)
}

export default courses
