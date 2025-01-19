import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const myFont = localFont({
  src: "../../public/fonts/SimplonNorm.woff2",
  display: 'swap' 
});

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: "Appscrip E-Commerce", 
    template: '%s | Your Site Name'
  },
  description: "E-Commerce for Appscrip",
  openGraph: {
    title: "Your Site Name",
    description: "Find your perfect products at Appscrip. We offer branded products, fast delivery, secure checkout, personalized service with a focus on quality, sustainability, affordability. Shop now and experience the difference.",
    url: 'https://yourdomain.com', 
    siteName: 'Appscrip E-Commerce',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  // Adding Schema.org JSON-LD for SEO
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Appscrip",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://twitter.com/yourprofile",
      "https://www.instagram.com/yourprofile"
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="googlebot-news" content="index, follow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{metadata.title.default}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* JSON-LD Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>
      </head>
      <body className={myFont.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
