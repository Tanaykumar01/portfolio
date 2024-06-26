import { JetBrains_Mono} from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
   subsets: ["latin"] ,
   weights: ["100" , "200" , "300", "400", "500" ,"600","700","800"],
   variable: '--font-jetbrainsMono'
  });

export const metadata = {
  title: "Portfolio",
  description: "Motivated and detail-oriented B.Tech graduate in Electronics and Communication Engineering with strong technical skills in software development, web applications, and data structures. Seeking a challenging position to utilize my skills and contribute to innovative projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
