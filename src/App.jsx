
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import Router from './router';

export default function App() {
  return (
    <>
      <Navbar />
      <Router />
      <SocialBar />
      <Footer />
    </>
  );
}
