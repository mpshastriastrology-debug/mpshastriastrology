import Hero from '../components/Hero';
import { Helmet } from "react-helmet-async";
import Services1 from '../components/Services1';
import Astrologyservices from '../components/Astrologyservices';

function Home() {
  // Combined Structured Data Object for Clean Code
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mpshastriastrology.com/#localbusiness",
        "name": "MP Shastri Astrology",
        "url": "https://www.mpshastriastrology.com/",
        "telephone": "+918073258799",
        "priceRange": "$$",
        "image": "https://www.mpshastriastrology.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mahalakshmi Layout",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560086",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.0118",
          "longitude": "77.5458"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Bangalore" },
          { "@type": "Country", "name": "India" }
        ],
        "knowsAbout": [
          "Vedic Astrology", "Vastu Shastra Consultation", "Face Reading", "Kundali Matching", "Spiritual Counseling"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mpshastriastrology.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can Vedic astrology assist me in practical life planning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vedic readings isolate the underlying systemic shifts in your lifecycle, revealing timeline periods of high opportunity for investments alongside windows requiring cautionary tracking."
            }
          },
          {
            "@type": "Question",
            "name": "Are your remote/online consultation readings as accurate as physical visits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Because cosmic tracking functions on precise calculations of your birth date, location, and minute parameters, telephone and digital video calls yield identical accuracy."
            }
          },
          {
            "@type": "Question",
            "name": "What fields are evaluated during a routine Vastu consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consultations cover directional flow patterns, room assignments, entrance configurations, and structural elements for both residential layouts and commercial office spaces."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.mpshastriastrology.com/#product-consultation",
        "name": "Vedic Astrology & Vastu Consultation Services",
        "image": "https://www.mpshastriastrology.com/MPShastriAstrology.webp",
        "description": "Professional Vedic astrology chart readings, corporate business forecasting, compatibility matching, and traditional Vastu Shastra architectural assessments by Shri MP Shastri.",
        "brand": {
          "@type": "Brand",
          "name": "MP Shastri Astrology"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "25000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ramesh Kumar" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Remarkably systematic and accurate natal tracking. The suggested remedial actions were exceptionally straightforward and restored my professional focus during a difficult career shift."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Sharma" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Exceptional Vastu correction recommendations for our flat layout. We observed a tangible increase in residential harmony without requiring major demolition work."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Naveen Raj" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "A deeply philosophical and genuine guide. Shri MP Shastri handles delicate personal challenges with tremendous sensitivity and profound ancient knowledge."
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Vedic Astrologer &amp; Vastu Consultant in Bangalore | MP Shastri</title>
        <meta
          name="description"
          content="Consult MP Shastri for authentic Vedic astrology, accurate Kundali matching, and Vastu solutions in Bangalore. Book your online or in-person session today."
        />
        <link rel="canonical" href="https://www.mpshastriastrology.com/" />

        <meta property="og:title" content="Vedic Astrologer &amp; Vastu Consultant in Bangalore | MP Shastri" />
        <meta
          property="og:description"
          content="Get accurate life predictions, marriage matching, and home Vastu corrections from expert Bangalore astrologer MP Shastri."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mpshastriastrology.com/og-image.jpg" />

        {/* This single script block injects all your SEO data perfectly */}
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <Hero />
      <Astrologyservices />
      <Services1 />
    </>
  );
}

export default Home;