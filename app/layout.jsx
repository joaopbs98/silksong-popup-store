import "./globals.css";

export const metadata = {
  title: "SILKSONG",
  description: "Welcome to SILKSONG.",
  icons: {
    icon: "/assets/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="font-nunito h-screen w-screen">{children}</body>
    </html>
  );
}
