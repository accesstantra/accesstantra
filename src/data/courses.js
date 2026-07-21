import { YOUTUBE_URL } from './site.js'

// Courses live under /courses (a separate section from Programs). Each course
// renders via ContentPage at /courses/<id>. `upcoming: true` lists it on the
// Courses landing page; the landing always shows the standing links below.

const courses = [
  {
    id: 'excel',
    navLabel: 'Microsoft Excel Training',
    title: 'Intermediate to Advanced Microsoft Excel — Online Training',
    tagline:
      'Screen-reader-friendly, practical Excel training for studies, employment, and professional growth.',
    upcoming: true,
    meta: {
      'New batch starts': '1 August',
      Mode: 'Live online classes',
      'Enrollment fee': '₹500 (₹250 refundable on completion)',
    },
    subtitle:
      'A new batch of our Intermediate to Advanced Microsoft Excel training begins on 1 August. Our first batch has been completed successfully.',
    intro: [
      'Following an encouraging response from learners across India, Accessible Tantra is pleased to announce admissions for the next batch of its Intermediate to Advanced Microsoft Excel Online Training.',
      'If you already have a basic understanding of Microsoft Excel and want to build practical skills for academics, employment, or professional growth, this training will help you work more efficiently and confidently. It is open to students, job seekers, working professionals, trainers, NGO staff, bank and office employees, entrepreneurs, freelancers, and anyone who wants to strengthen their Excel skills.',
      'The course is screen-reader friendly and specially designed for visually impaired learners. Every session focuses on practical learning through real-world examples, so you can apply your skills in your studies, workplace, and everyday professional tasks.',
    ],
    sections: [
      {
        heading: 'Learn from an experienced trainer',
        list: [
          'Qualified with a Diploma in Computer Education & Assistive Technology from a Rehabilitation Council of India (RCI) recognised programme.',
          'Experienced in teaching Microsoft Office, assistive technology, and digital skills.',
          'Practical, workplace-oriented training with real-life examples.',
          'Live interactive sessions with assignments and doubt-solving support.',
        ],
      },
      {
        heading: 'Course highlights',
        list: [
          'Large data management & analysis',
          'Advanced formatting, sorting & filtering',
          'Advanced Excel functions & formulas',
          'Lookup functions & cross-sheet references',
          'Data validation & error handling',
          'Goal Seek, scenario analysis & reporting techniques',
          'Charts, dashboards & productivity tools',
          'Essential keyboard shortcuts',
          'Practical tips and tricks for screen-reader users',
        ],
      },
      {
        heading: 'Practical, project-based learning',
        body: 'You will learn through real-world Excel projects, including:',
        list: [
          'Student records & result analysis',
          'Attendance & payroll management',
          'Banking & financial reports',
          'Customer & transaction records',
          'Sales, inventory & MIS reporting',
        ],
      },
      {
        heading: 'Enrollment fee',
        body:
          'The enrollment fee is ₹500. On successful completion of the course — subject to meeting the attendance and course-completion requirements — 50% of the fee (₹250) is refunded.',
      },
      {
        heading: 'Batch details',
        list: [
          'Batch starts: 1 August',
          'Mode: Live online classes',
          'Limited seats available',
        ],
      },
      {
        heading: 'Eligibility',
        list: ['Basic computer knowledge', 'Basic knowledge of Microsoft Excel'],
      },
    ],
    formHeading: 'Register now',
    formIntro: [
      'Seats are limited. Complete the registration form below to enroll for the batch starting 1 August.',
      'For registration and course details, you can also call +91 99107 31239.',
    ],
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSeanNQpPB2XQIp13-TAoa2gs0kcj2uT9_GCa52_sUGLc08geQ/viewform?embedded=true',
    },
    ctas: [
      {
        label: 'Join our WhatsApp channel',
        href: 'https://whatsapp.com/channel/0029VbD4Ydn2P59g03ah4T3D',
        variant: 'outline',
      },
      { label: 'Contact us', to: '/contact', variant: 'outline' },
    ],
    returnHome: true,
  },

  {
    id: 'computer-digital-skills',
    navLabel: 'Free Computer & Digital Skills Course',
    title: 'Free Computer & Digital Skills Course (CDSC)',
    tagline:
      'Free live online computer and digital skills training for visually impaired learners.',
    upcoming: true,
    meta: { 'Training starts': '17 August', Mode: 'Live online classes', Fee: 'Free' },
    subtitle:
      'A free, live online Computer & Digital Skills Course (CDSC) for visually impaired individuals.',
    intro: [
      'In today’s digital world, computer skills are essential for education, employment, communication, online services, and everyday life. To help visually impaired individuals use technology more confidently and independently, Accessible Tantra is launching a free Computer & Digital Skills Course (CDSC).',
      'This practical, live online training builds essential computer and digital skills through hands-on learning and real-world applications.',
    ],
    sections: [
      {
        heading: 'What you will learn',
        list: [
          'Computer fundamentals & Windows basics',
          'File, folder & drive management',
          'Disk partitioning, drive formatting & device drivers',
          'Installing, updating & removing software',
          'Data transfer between mobile, computer & external devices',
          'Cloud storage (Google Drive, OneDrive, and more)',
          'Internet browsing & accessing websites',
          'Smart Google search & search-engine techniques',
          'Uploading & downloading files from the internet',
          'Gmail & email management (web browser and email client)',
          'Social networking & online communication',
          'Microsoft Word & Excel',
          'Google Workspace essentials',
          'Artificial intelligence (AI) for everyday productivity',
          'Special software for visually impaired users',
          'Reading accessible formats (PDF, DAISY, EPUB, and more)',
          'Text-to-speech & regional-language reading tools',
          'Keyboard shortcuts & productivity techniques',
        ],
      },
      {
        heading: 'Course features',
        list: [
          'Completely free live online training',
          'Screen-reader-friendly teaching',
          'Practical, hands-on learning',
          'Interactive doubt-clearing sessions',
        ],
      },
      {
        heading: 'How to register',
        body:
          'Training starts on 17 August. For registration and course details, call or WhatsApp +91 99107 31239, or join our WhatsApp channel using the links below.',
      },
    ],
    ctas: [
      {
        label: 'Register on WhatsApp',
        href: 'https://wa.me/919910731239',
        variant: 'primary',
      },
      {
        label: 'Join our WhatsApp channel',
        href: 'https://whatsapp.com/channel/0029VbD4Ydn2P59g03ah4T3D',
        variant: 'outline',
      },
      { label: 'Contact us', to: '/contact', variant: 'outline' },
    ],
    returnHome: true,
  },
]

// Configuration for the /courses landing page.
export const coursesLanding = {
  title: 'Courses',
  intro:
    'Skill-building courses from Accessible Tantra. Browse our upcoming courses below, request training tailored to your needs, or explore our YouTube channel for free tutorials.',
  noCoursesMessage: 'There are no upcoming courses at the moment. Please check back soon.',
  standingLinks: [
    {
      label: 'Request customized digital training',
      to: '/programs/digital-training-request',
      variant: 'primary',
    },
    { label: 'Visit our YouTube channel', href: YOUTUBE_URL, variant: 'outline' },
  ],
}

export function getCourse(id) {
  return courses.find((course) => course.id === id)
}

export default courses
