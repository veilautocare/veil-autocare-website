export const metadata = {
  metadataBase: new URL("https://veilautocare.com"),

  title: "Veil Auto Care | Premium Auto Detailing in Surrey, BC",

  description:
    "Premium auto detailing, ceramic coatings, paint correction, maintenance detailing, and interior detailing in Surrey, BC.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Veil Auto Care",
    description:
      "Premium mobile auto detailing in Surrey, BC.",
    url: "https://veilautocare.com",
    siteName: "Veil Auto Care",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veil Auto Care",
    description: "Premium mobile auto detailing in Surrey, BC.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
