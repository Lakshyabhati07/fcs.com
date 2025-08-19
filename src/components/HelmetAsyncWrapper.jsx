// src/components/HelmetAsyncWrapper.jsx

import { Helmet } from "react-helmet-async";

const HelmetAsyncWrapper = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
};

export default HelmetAsyncWrapper;
