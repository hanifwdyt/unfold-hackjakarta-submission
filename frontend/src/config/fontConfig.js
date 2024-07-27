import { Inter } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800', '900']
});

export const sanomatSans = localFont({
  src: '../../public/assets/fonts/sanomat/SanomatSans-Regular-Trial.otf',
  subsets: ['latin'],
  variable: '--font-sanomat-sans',
  display: 'swap',
})