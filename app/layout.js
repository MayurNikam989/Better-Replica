import "./../styles/globals.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "Better Replica",
  description:
    "A learning project replicating select Better.com pages using Next.js and SCSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
