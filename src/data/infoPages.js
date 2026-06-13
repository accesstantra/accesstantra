// Informational pages grouped under the "Explore" dropdown. Each renders via
// ContentPage at /<id>. Bodies are mostly placeholder copy until real
// material (reports, photos, forms) is provided.

const infoPages = [
  {
    id: 'announcements',
    navLabel: 'Announcements',
    title: 'Announcements & Opportunities',
    tagline: 'Workshops, trainings, webinars, volunteering and more.',
    intro: [
      'Welcome to Announcements & Opportunities. This page is a central hub for upcoming workshops, training programmes, webinars, volunteer opportunities, internships, community initiatives, registrations, and other important announcements from Accessible Tantra and our collaborators.',
      'We encourage you to visit regularly to stay informed about new ways to learn, contribute, collaborate, and grow. If you are aware of any accessibility-related opportunity that may benefit the community, you are welcome to share it with us for review and possible publication.',
    ],
    sections: [
      {
        heading: 'Current announcements',
        list: [
          'Free 21-Day Intermediate to Advanced Excel Training — registrations open. See Courses to register.',
        ],
      },
    ],
    ctas: [
      { label: 'View courses', to: '/courses', variant: 'primary' },
      { label: 'Share an opportunity', to: '/contact', variant: 'outline' },
    ],
  },

  {
    id: 'did-you-know',
    navLabel: 'Did You Know',
    title: 'Did You Know?',
    tagline: 'Facts, insights and stories on accessibility and inclusion.',
    intro: [
      'Welcome to Did You Know? Accessibility is not only about removing barriers — it is also about sharing knowledge. This page brings together interesting facts, insights, innovations, legal developments, assistive technologies, historical milestones, and inspiring stories related to disability, accessibility, inclusion, and independent living.',
      'We believe that knowledge grows when it is shared. If you know an interesting fact, accessibility innovation, success story, or legal development that may benefit the community, we invite you to submit it. All submissions are reviewed and verified by our team before publication, and where appropriate, due credit may be given to the contributor.',
    ],
    formHeading: 'Submit a fact or story',
    formIntro:
      'A submission form will be available here soon. In the meantime, please share your fact, story, or resource with us by email or through our contact page.',
    // No submission form link provided yet — placeholder via Contact CTA.
    ctas: [{ label: 'Submit via contact', to: '/contact', variant: 'primary' }],
  },

  {
    id: 'media-gallery',
    navLabel: 'Media Gallery',
    title: 'Media Gallery',
    tagline: 'Photos, videos and moments from our journey.',
    intro: [
      'Welcome to the Media Gallery. Explore photos, videos, event highlights, workshops, awareness campaigns, and memorable moments from the journey of Accessible Tantra. This gallery reflects our efforts, collaborations, and commitment towards building a more accessible and inclusive society.',
      'We invite you to follow our journey and share these moments with others to help spread awareness about accessibility and inclusion.',
    ],
    sections: [
      {
        heading: 'Coming soon',
        body:
          'Photos and videos will be added here soon. Until then, you can follow our latest videos on our YouTube channel.',
      },
    ],
    ctas: [{ label: 'Visit our YouTube channel', href: 'https://www.youtube.com/@accessibletantra', variant: 'primary' }],
  },

  {
    id: 'our-impact',
    navLabel: 'Our Impact',
    title: 'Our Impact',
    tagline: 'Progress, achievements and outcomes from our initiatives.',
    intro: [
      'Welcome to Our Impact. This page highlights the progress, achievements, and outcomes of our initiatives — workshop reports, success stories, training outcomes, testimonials, accessibility improvements achieved, and other milestones from our journey towards a more accessible and inclusive society.',
      'As a growing initiative, every step forward is made possible through the support, trust, and participation of our community, partners, volunteers, and well-wishers. We look forward to sharing our impact with you and, with your continued support, hope to create even greater change in the years ahead.',
    ],
    sections: [
      {
        heading: 'Reports & stories',
        body:
          'Annual reports, workshop reports, and success stories will be published here as our initiatives progress. Please check back soon.',
      },
    ],
    ctas: [{ label: 'Support our work', to: '/contact', variant: 'primary' }],
  },
]

export function getInfoPage(id) {
  return infoPages.find((page) => page.id === id)
}

export default infoPages
