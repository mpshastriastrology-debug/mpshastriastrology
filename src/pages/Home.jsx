import Hero from '../components/Hero';
import { Helmet } from "react-helmet";
import Services1 from '../components/Services1';
import Astrologyservices from '../components/Astrologyservices';

function Home() {
  return (
    <>
    <Helmet>
<script type="application/ld+json">
{`
{
  "@context":"https://schema.org",
  "@type":"ProfessionalService",
  "name":"MP Shastri Astrology",
  "telephone":"+918073258799",
  "address":{
    "@type":"PostalAddress",
    "addressLocality":"Bangalore",
    "addressCountry":"India"
  }
}
`}
</script>
<title>
Best Astrologer in Bangalore | Online Astrology & Vastu Expert | MP Shastri
</title>

  <meta
    name="description"
    content="Best astrologer in Bangalore for astrology, vastu, face reading, tantra and spiritual consultation."
  />

  <meta
    name="keywords"
    content="Consult MP Shastri, Best Astrologer in Bangalore for online astrology consultation, vastu expert guidance, face reading, marriage prediction, career astrology and spiritual solutions across India."
  />

<meta
  name="keywords"
  content="
  best astrologer in bangalore,
  online astrologer,
  astrologer near me,
  astrologer in india,
  vastu expert,
  vastu consultant bangalore,
  astrology consultation,
  marriage astrologer,
  career astrology,
  face reading"
/>
<link
  rel="canonical"
  href="https://mpshastriastrology.com/"
/>
<meta property="og:title" content="Best Astrologer in Bangalore | MP Shastri" />

<meta
  property="og:description"
  content="Online astrology consultation, vastu expert guidance, marriage and career astrology services."
/>

<meta
  property="og:url"
  content="https://mpshastriastrology.com/"
/>

<meta property="og:type" content="website" />

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MP Shastri Astrology",
  "url": "https://mpshastriastrology.com",
  "telephone": "+918073258799",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "India"
  },
  "areaServed": "India",
  "serviceType": [
    "Astrology Consultation",
    "Online Astrology",
    "Vastu Consultation",
    "Face Reading",
    "Tantra Consultation"
  ]
}
`}
</script>

</Helmet>
      <Hero />
      <Astrologyservices/>
      <Services1/>


    </>
  )
}

export default Home