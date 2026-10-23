import { Inter_Tight } from "next/font/google";

// Shared font instance for the Home redesign (navbar, footer and page
// content all need the same Inter Tight font outside the sitewide
// Manrope set in app/layout.tsx), per next/font's recommended pattern
// for reusing one font across multiple files.
export const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
});
