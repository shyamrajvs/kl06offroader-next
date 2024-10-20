// components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  datePublished: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, author, datePublished }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags for Facebook and Instagram */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data for Article */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Article",
          "headline": title,
          "datePublished": datePublished,
          "author": {
            "@type": "Person",
            "name": author
          },
          "image": image,
          "publisher": {
            "@type": "Organization",
            "name": "Your Organization Name", // Replace with your organization name
            "logo": {
              "@type": "ImageObject",
              "url": "https://example.com/images/logo.png" // Logo URL
            }
          },
          "description": description
        })}
      </script>
    </Head>
  );
};

export default SEO;
