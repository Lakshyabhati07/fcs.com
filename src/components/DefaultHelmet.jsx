// src/components/DefaultHelmet.jsx
import { Helmet } from "react-helmet-async";

const DefaultHelmet = () => {
  return (
    <Helmet>
      <title>Fortune Consultants</title>
      <meta
        name="description"
        content="Fortune Consultants provides expert food safety, audits, and consultancy services tailored to your needs."
      />
      <meta
        name="keywords"
        content="Food, Food safety, quality, consultant, GMO, Training, HACCP, FSSC, BRCGS, GAP, ISO, RCA, Process development, Documentation, Audit, Testing, validation, verification, calibration, Infant food, Nutraceutical, Pharma, Product, FSSAI, Hygiene rating, Microbiology, Risk assessment, PRP, Sustainability, Regulatory Compliance, Vendor management"
      />
      <meta name="author" content="Fortune Consultants" />

      {/* Open Graph */}
      <meta property="og:title" content="Fortune Consultants" />
      <meta
        property="og:description"
        content="Expert food safety, audits, and consultancy services."
      />
      <meta
        property="og:image"
        content="https://yourwebsite.com/default-og-image.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourwebsite.com/" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Fortune Consultants" />
      <meta
        name="twitter:description"
        content="Expert food safety, audits, and consultancy services."
      />
      <meta
        name="twitter:image"
        content="https://yourwebsite.com/default-og-image.jpg"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://yourwebsite.com/" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default DefaultHelmet;
