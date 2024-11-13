import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const typingFont = localFont({
  src: "./fonts/TravelingTypewriter.ttf",
  variable: "--font-typing-mono",
  weight: "100 900"
})
export const metadata = {
  title: "Aaron's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${typingFont.variable} antialiased bg-blue-50 dark:bg-slate-900 container mx-auto min-h-screen-max-screen-xl px-6 py-10 font-sans md:px-12 md:py-20`}
      >
        <Provider>
          <div className="mt-10">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
