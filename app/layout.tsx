import { Inconsolata, Inter, Lora } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Dictionary Web App",
  description: "A dictionary web app by Omar Al Seddik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`absolute inset-0 font-sans
        ${inter.className} ${lora.className} ${inconsolata.className}`}
      >
        <div
          className="max-w-[46rem] gap-[1.5rem] sm:gap-[3.25rem] flex flex-col
        mx-auto p-[1.5rem] sm:p-[2.5rem] sm:pt-[3.625rem]"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
