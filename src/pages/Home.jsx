import Hero from '../components/Hero';
import { Helmet } from "react-helmet";


import Services1 from '../components/Services1';
<script type="application/ld+json">
{`
{
  "@context":"https://schema.org",
  "@type":"ProfessionalService",
  "name":"MP Shastri Astrology",
  "telephone":"+919999999999",
  "address":{
    "@type":"PostalAddress",
    "addressLocality":"Bangalore",
    "addressCountry":"India"
  }
}
`}
</script>
function Home() {
  return (
    <>
    <Helmet>

  <title>
    MP Shastri Astrology | Best Astrologer in Bangalore
  </title>

  <meta
    name="description"
    content="Best astrologer in Bangalore for astrology, vastu, face reading, tantra and spiritual consultation."
  />

  <meta
    name="keywords"
    content="Astrologer Bangalore, Vastu Consultant, Online Astrology, Face Reading, Tantra"
  />

</Helmet>
      <Hero />
      <Services1/>



    </>
  )
}

export default Home