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
      <meta name="keywords" content="food safety, audits, consultancy, FSSC 22000, SQF" />
      <meta property="og:title" content="Fortune Consultants" />
      <meta
        property="og:description"
        content="Expert food safety, audits, and consultancy services."
      />
      <meta property="og:image" content="https://yourwebsite.com/default-og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta name="author" content="Fortune Consultants" />
    </Helmet>
  );
};

export default DefaultHelmet;
