import Navbar from './components/Navbar';
import './styles/globals.scss';
import 'animate.css';

export const metadata = {
  title: 'Marlon Baatjes Personal Portfolio',
  description: 'A glimpse into the world of tech savvy Software Engineer Marlon Baatjes',
  keywords: ['Software engineer', 'Web developer', 'Frontend Developer', 'Frontend Engineer', 'React'],
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png'
  }
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
