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
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSeyrZ4wZM7yHPWP80ts6sJ95fFZc9JgVsvIRsiWBv8NrIfkBQ/viewform?embedded=true',
    },
    hi: {
      intro:
        'यह एक निःशुल्क ऑनलाइन कार्यक्रम है, उन शिक्षार्थियों के लिए जो पहले से बेसिक एक्सेल जानते हैं और शिक्षा एवं कार्यस्थल के लिए व्यावहारिक, स्क्रीन-रीडर-अनुकूल कौशल सीखना चाहते हैं। इसमें कीबोर्ड-आधारित सीखने और वास्तविक कार्यालयी कार्यों पर ध्यान केंद्रित किया जाता है।',
      sections: [
        {
          heading: 'आप क्या सीखेंगे',
          list: [
            'बड़े डेटा का प्रबंधन और डेटा विश्लेषण',
            'उन्नत फ़ॉर्मेटिंग, सॉर्टिंग और फ़िल्टरिंग',
            'डेटा सत्यापन और त्रुटि नियंत्रण',
            'लुकअप और क्रॉस-वर्कशीट डेटा प्रबंधन',
            'गोल सीक और परिदृश्य विश्लेषण',
            'चार्ट, रिपोर्टिंग और डैशबोर्ड संबंधी अवधारणाएँ',
            'उत्पादकता उपकरण और कीबोर्ड शॉर्टकट',
            'स्क्रीन रीडर उपयोगकर्ताओं के लिए व्यावहारिक तकनीकें',
          ],
        },
        {
          heading: 'कौन शामिल हो सकता है',
          list: [
            'दृष्टिबाधित छात्र और नौकरी की तलाश करने वाले',
            'कार्यरत पेशेवर, शिक्षक और प्रशिक्षक',
            'एनजीओ, कार्यालय और बैंकिंग कर्मचारी',
            'कोई भी व्यक्ति जो अपने एक्सेल कौशल को बेहतर बनाना चाहता है',
          ],
        },
      ],
      formIntro: 'सीटें सीमित हैं। पंजीकरण के लिए कृपया नीचे अपना विवरण भरें।',
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
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSdBxDcEx5-Z_MwteciobqalonxLLCXGIpbEesVNkD_VCJOSaA/viewform?embedded=true',
    },
    hi: {
      intro:
        'हमें बताएं कि आपको या आपकी संस्था को क्या आवश्यकता है, और हम उसके अनुरूप सुलभ, स्क्रीन-रीडर-अनुकूल प्रशिक्षण तैयार करेंगे — व्यक्तियों, टीमों अथवा शैक्षणिक संस्थानों के लिए।',
      formIntro:
        'नीचे दिए गए फ़ॉर्म के माध्यम से अपनी आवश्यकताएँ साझा करें और हमारी टीम आपसे संपर्क करेगी।',
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
