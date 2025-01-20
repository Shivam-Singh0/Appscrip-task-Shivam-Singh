import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const myFont = localFont({
  src: "../../public/fonts/SimplonNorm.woff2",
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://appscrp-ecom.vercel.app/'),
  title: {
    default: "Appscrip E-Commerce",
    template: '%s | Your Site Name'
  },
  description: "E-Commerce for Appscrip default description, it can be replaced in specific pages",
  openGraph: {
    title: "Appscrip E-Commerce",
    description: "Find your perfect products at Appscrip. We offer branded products, fast delivery, secure checkout, personalized service with a focus on quality, sustainability, affordability. Shop now and experience the difference.",
    url: 'https://appscrp-ecom.vercel.app/',
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
    structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Appscrip",
    "url": "https://appscrp-ecom.vercel.app/",
    "logo": "https://appscrp-ecom.vercel.app/logo.png",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
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