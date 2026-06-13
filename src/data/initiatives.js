import { YOUTUBE_URL } from './site.js'

// Our Initiatives — each becomes an item in the "Programs" dropdown and a page
// at /programs/<id>, rendered by ContentPage. Pluggable: remove an object to
// drop its nav item + page; the dropdown hides entirely when none remain.
//
// Shape: { id, navLabel, title, tagline, status?, intro, introHi?, sections?,
//   form?, formHeading?, formIntro?, formIntroHi?, returnHome?, ctas? }

export const initiativesIntro =
  'Accessible Tantra believes that accessibility begins with knowledge, skills, awareness, collaboration, and community participation. Our initiatives evolve in response to changing needs — the following are some of our key initiatives, though our work is not limited to these areas.'

const initiatives = [
  {
    id: 'digital-literacy',
    navLabel: 'Digital Literacy',
    title: 'Digital Literacy Programme',
    tagline: 'Bridging the digital divide through accessible technology training.',
    intro: [
      'Welcome to the Digital Literacy Programme.',
      'Technology has become an essential part of education, employment, communication, and independent living. The Digital Literacy Programme of Accessible Tantra is designed to empower persons with disabilities by enhancing their digital skills and enabling them to use technology effectively in their daily lives.',
    ],
    sections: [
      {
        heading: 'What the programme covers',
        list: [
          'Digital Literacy for All — smartphones, computers, internet, online services, digital payments, productivity and assistive technologies, and emerging AI tools.',
          'For school and college students — online learning platforms, research methods, digital safety, accessibility features and independent learning.',
          'For professionals — workplace tools, document accessibility, collaboration platforms, remote-working and assistive technology integration.',
          'Customised training for specialised streams — law, engineering, medicine, management, research, journalism, education and IT.',
          'For older persons — confidently using devices, communication, digital payments, healthcare apps and safety practices.',
          'For parents, caregivers and family members of children with special needs — assistive technologies, accessible learning tools and online safety.',
        ],
      },
      {
        heading: 'Current courses',
        body:
          'At present, there are no active courses available under this programme. If you require digital support, guidance, or assistance related to accessibility, assistive technologies, or technology training, we encourage you to reach out to us by email or phone. You may also explore our YouTube channel and other learning resources for tutorials and accessibility-related content.',
      },
    ],
    ctas: [
      { label: 'View upcoming courses', to: '/courses', variant: 'primary' },
      { label: 'Contact us', to: '/contact', variant: 'outline' },
      { label: 'Visit our YouTube channel', href: YOUTUBE_URL, variant: 'outline' },
    ],
    returnHome: true,
  },

  {
    id: 'mentorship',
    navLabel: 'Mentorship',
    title: 'Mentorship Programme',
    tagline: 'Guidance from experienced mentors and subject experts.',
    intro: [
      'Welcome to the Mentorship Programme.',
      'The Mentorship Programme of Accessible Tantra is designed to provide guidance and support to persons with disabilities, parents, caregivers, and family members through experienced mentors and subject experts. Whether you are a student seeking educational guidance, a professional navigating workplace challenges, or a parent looking for support and direction, our mentors are here to assist you.',
    ],
    sections: [
      {
        heading: 'Who we mentor',
        list: [
          'Students — education, skill development, career planning, competitive exams, higher studies, accessibility solutions and independent living.',
          'Emerging professionals — workplace accessibility, career development, communication, networking, leadership and overcoming workplace barriers.',
          'Parents and caregivers — education, accessibility, assistive technologies, rights awareness and support mechanisms.',
        ],
      },
      {
        heading: 'Please note',
        body:
          'This initiative is currently offered on an observance and pilot basis. Its continuation will depend on the level of participation, engagement, and response received. In the event of insufficient interest or operational constraints, the programme may be modified, suspended, or discontinued in the future. If you find this initiative useful, please share this page with others who may benefit.',
      },
    ],
    formHeading: 'Request mentorship',
    formIntro:
      'To request mentorship, kindly fill out the form below. Our team will review your submission and connect you with a suitable mentor based on your requirements.',
    form: {
      type: 'embed',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLScV4EpmpbR3Qt29IbEwzNdxJ8iZm4VnKuTyqfGhAhZi21FIAw/viewform?embedded=true',
    },
    // Full Hindi translation of the description (intro + sections + form intro).
    hi: {
      intro: [
        'मेंटरशिप कार्यक्रम में आपका स्वागत है।',
        'एक्सेसिबल तंत्र का मेंटरशिप कार्यक्रम अनुभवी मेंटर्स और विषय विशेषज्ञों के माध्यम से दिव्यांगजनों, अभिभावकों, देखभालकर्ताओं और परिवार के सदस्यों को मार्गदर्शन एवं सहायता प्रदान करने के लिए बनाया गया है। चाहे आप शैक्षिक मार्गदर्शन चाहने वाले छात्र हों, कार्यस्थल की चुनौतियों से जूझ रहे पेशेवर हों, या सहायता एवं दिशा की तलाश में अभिभावक हों — हमारे मेंटर्स आपकी सहायता के लिए उपलब्ध हैं।',
      ],
      sections: [
        {
          heading: 'हम किन्हें मार्गदर्शन देते हैं',
          list: [
            'छात्र — शिक्षा, कौशल विकास, करियर योजना, प्रतियोगी परीक्षाएँ, उच्च शिक्षा, सुलभता समाधान और स्वतंत्र जीवन।',
            'नवोदित पेशेवर — कार्यस्थल सुलभता, करियर विकास, संचार, नेटवर्किंग, नेतृत्व और कार्यस्थल की बाधाओं को दूर करना।',
            'अभिभावक एवं देखभालकर्ता — शिक्षा, सुलभता, सहायक तकनीकें, अधिकारों के प्रति जागरूकता और सहायता तंत्र।',
          ],
        },
        {
          heading: 'कृपया ध्यान दें',
          body:
            'यह पहल वर्तमान में अवलोकन एवं प्रायोगिक (पायलट) आधार पर प्रदान की जा रही है। इसकी निरंतरता प्राप्त भागीदारी, सहभागिता और प्रतिक्रिया के स्तर पर निर्भर करेगी। अपर्याप्त रुचि अथवा संचालनगत बाधाओं की स्थिति में, भविष्य में इस कार्यक्रम को संशोधित, स्थगित अथवा बंद किया जा सकता है। यदि यह पहल आपको उपयोगी लगे, तो कृपया इस पृष्ठ को उन लोगों के साथ साझा करें जिन्हें इससे लाभ हो सकता है।',
        },
      ],
      formIntro:
        'मेंटरशिप का अनुरोध करने के लिए कृपया नीचे दिया गया फ़ॉर्म भरें। हमारी टीम आपके अनुरोध की समीक्षा करेगी और आपकी आवश्यकताओं के अनुसार आपको उपयुक्त मेंटर से जोड़ेगी।',
    },
  },

  {
    id: 'collaboration',
    navLabel: 'Collaboration',
    title: 'Collaboration Programme',
    tagline: 'Building a network of partners for an accessible society.',
    intro: [
      'Welcome to the Collaboration Programme.',
      'Whether you would like to collaborate with us or seek our support in advancing accessibility and inclusion, we would be delighted to connect with you. Accessible Tantra invites NGOs, educational institutions, professionals, trainers, accessibility consultants, volunteers, corporate organisations, and individuals working in the disability sector to join hands with us.',
    ],
    sections: [
      {
        heading: 'Who can collaborate',
        list: [
          'NGOs and disability-specific advocacy groups',
          'Schools, universities and educational institutions',
          'Accessibility consultants and technology experts',
          'Corporate organisations and industry leaders',
          'Government departments and public authorities',
          'Parents’ groups, volunteers and self-advocates',
        ],
      },
      {
        heading: 'Areas of collaboration',
        list: [
          'Training, workshops and capacity-building',
          'Research, documentation and accessibility audits',
          'Awareness campaigns and community outreach',
          'Policy advocacy and recommendations',
          'Resource development and knowledge sharing',
          'Inclusive and assistive technology initiatives',
          'Volunteer engagement programmes',
        ],
      },
    ],
    formHeading: 'Collaborate with us',
    formIntro:
      'A dedicated collaboration form will be available here soon. In the meantime, if you wish to collaborate, contribute as a trainer or mentor, or explore a partnership, please reach out to us.',
    // No collaboration form link provided yet — placeholder via Contact CTA.
    ctas: [{ label: 'Contact us to collaborate', to: '/contact', variant: 'primary' }],
  },
]

export function getInitiative(id) {
  return initiatives.find((item) => item.id === id)
}

export default initiatives
