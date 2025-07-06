
interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  structuredData?: any;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Update title
  document.title = seoData.title;
  
  // Update meta description
  updateMetaTag('description', seoData.description);
  updateMetaTag('keywords', seoData.keywords);
  
  // Update Open Graph tags
  updateMetaProperty('og:title', seoData.title);
  updateMetaProperty('og:description', seoData.description);
  updateMetaProperty('og:url', seoData.canonical);
  if (seoData.ogImage) {
    updateMetaProperty('og:image', seoData.ogImage);
  }
  
  // Update Twitter tags
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  updateMetaTag('twitter:url', seoData.canonical);
  if (seoData.ogImage) {
    updateMetaTag('twitter:image', seoData.ogImage);
  }
  
  // Update canonical URL
  updateCanonical(seoData.canonical);
  
  // Add structured data if provided
  if (seoData.structuredData) {
    addStructuredData(seoData.structuredData);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

const addStructuredData = (data: any) => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Refluxe",
  "description": "Platforma modernă de cupoane digitale de fidelitate pentru afaceri și consumatori din România",
  "url": "https://refluxe.ro",
  "logo": "https://refluxe.ro/gabio-uploads/495771be-804e-48df-8f77-e4316aff17fb.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+40-756-123-456",
    "contactType": "customer service",
    "email": "contact@refluxe.ro",
    "availableLanguage": "Romanian"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RO",
    "addressLocality": "București"
  },
  "sameAs": [
    "https://www.linkedin.com/company/refluxe",
    "https://www.instagram.com/refluxe_ro"
  ],
  "foundingDate": "2024",
  "numberOfEmployees": "2-10",
  "industry": "Digital Marketing Technology"
});

export const getWebPageSchema = (pageName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": pageName,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Refluxe",
    "url": "https://refluxe.ro"
  },
  "author": {
    "@type": "Organization",
    "name": "Refluxe"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Refluxe",
    "logo": {
      "@type": "ImageObject",
      "url": "https://refluxe.ro/gabio-uploads/495771be-804e-48df-8f77-e4316aff17fb.png"
    }
  },
  "inLanguage": "ro-RO"
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Refluxe - Platformă Cupoane Digitale",
  "description": "Aplicație modernă pentru gestionarea programelor de fidelitate digitale și cupoane pentru afaceri",
  "url": "https://app.refluxe.io",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "RON",
    "description": "Planuri flexibile pentru toate tipurile de afaceri"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Refluxe"
  },
  "softwareVersion": "1.0",
  "releaseNotes": "Platformă completă de management programe fidelitate digitale"
});
