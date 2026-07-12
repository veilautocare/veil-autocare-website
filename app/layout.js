export const metadata = {
  title: "Veil Auto Care | Premium Auto Detailing",
  description:
    "Premium auto detailing, paint correction, ceramic coatings, and maintenance services in Surrey, BC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
