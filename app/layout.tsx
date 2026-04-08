import "@/app/ui/global.css";
import { inter } from "@/app/ui/font";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
      </head>
      <body className={`${inter.className} antialiased dark:bg-primary relative`}>
        <div id="main">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
