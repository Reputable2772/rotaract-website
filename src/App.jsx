
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './router';
import SocialBar from './components/SocialBar';

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
