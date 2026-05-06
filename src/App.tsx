/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Ticker from './components/Ticker';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Sectors from './components/Sectors';
import About from './components/About';
import Impact from './components/Impact';
import Values from './components/Values';
import Training from './components/Training';
import Donate from './components/Donate';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import ShareTools from './components/ShareTools';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import DraggableWhatsApp from './components/DraggableWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Ticker />
      <AnnouncementBar />
      <Navbar />
      <main className="relative">
        <Hero />
        <Vision />
        <Sectors />
        <About />
        <Impact />
        <Values />
        <Training />
        <Donate />
        <Contact />
        <LeadForm />
        <FAQ />
        <ShareTools />
      </main>
      <Footer />
      
      <Chatbot />
      <DraggableWhatsApp />
    </div>
  );
}

