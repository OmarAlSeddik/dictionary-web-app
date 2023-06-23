import { Inconsolata, Inter, Lora } from "next/font/google";
import { AppContextProvider } from "./AppContext";
import Header from "./Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
});

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
    <AppContextProvider>
      <html lang="en">
        <body
          className={`absolute inset-0 font-sans text-c3 dark:bg-c1 dark:text-white
          lightScrollbar dark:darkScrollbar transition-all
          ${inter.variable} ${lora.variable} ${inconsolata.variable}`}
        >
          <div
            className="max-w-[51rem] gap-[1.5rem] sm:gap-[3.25rem] flex flex-col
            mx-auto p-[1.5rem] sm:p-[2.5rem] sm:pt-[3.625rem]"
          >
            <Header />
            {children}
          </div>
        </body>
      </html>
    </AppContextProvider>
  );
}
