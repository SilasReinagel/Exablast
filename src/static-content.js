
const testimonial = (name, company, avatarSrc, text) => ({ name, company, text, avatarSrc });

const site = ({
  name: 'eXablast Web Design',
  shortName: 'eXablast',
  siteOwner: 'eXablast Web Design',
  owner: 'eXablast Web Design',
  slogan: 'We create blazingly fast websites to increase your online presence and skyrocket your revenue',
  heroHeader: 'We Create Blazingly Fast Websites That Convert',
  heroSubheader: 'Design. Create. Evolve.',
  email: 'contact@exablast.com',
  logo: './images/logo.png',
  logoMobile: './images/logo-small.png',
  publisherLogo: './images/vegagames-logo.png',
  address: null,
  contactPrompt: 'Want to setup an interview?<br>Got feedback on my game?<br>Send me a message',
  social: {
  },
  screenshots: [
  ],
  testimonials: [
    testimonial(
      'Aikon',
      'Cursed Gem',
      '/images/testimonials/cursed-gem-avatar.jpg',
      'It was very easy to work with them. Fast and professional work.<br><br>An amazing experience that I recommend to anyone.'),
    testimonial(
      'Margaretta Colangelo',
      'MCI Investments',
      '/images/testimonials/margaretta-colangelo-avatar.jpg',
      'Thank you SOOOOO much. I love the new design!!!!<br><br>It looks fantastic!! Thank you SO much!! I love it!!'
    )
  ]
});



export default site;
