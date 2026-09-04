import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import UnitsInitiatives from './pages/UnitsInitiatives';
import MediaResources from './pages/MediaResources';
import GetInvolved from './pages/GetInvolved';
import DonateUs from './pages/DonateUs';
import ContactUs from './pages/ContactUs';
import TransparencyLegal from './pages/TransparencyLegal';
import PersonalGratitude from './pages/PersonalGratitude';
import PaymentSuccessful from './pages/PaymentSuccessful';
import TestAssets from './pages/TestAssets';

import ChurchNavbar from './church/components/Navbar';
import ChurchFooter from './church/components/Footer';
import ProducerAlbum from './church/pages/ProducerAlbum_responsive';
import PresentCondition from './church/pages/PresentCondition';
import Highlights from './church/pages/Highlights';
import WhyNeeded from './church/pages/WhyNeeded';
import WhoParticipate from './church/pages/WhoParticipate';
import ParticipantRegistration from './church/pages/ParticipantRegistration';
import BecomeSponsor from './church/pages/BecomeSponsor';
import SupportMatters from './church/pages/SupportMatters';
import Credits from './church/pages/Credits';
import Testimonies from './church/pages/Testimonies';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MinistryLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, background: '#ffffff' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function ChurchLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ChurchNavbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <ChurchFooter />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Ministry Routes */}
        <Route path="/" element={<MinistryLayout><Home /></MinistryLayout>} />
        <Route path="/about-us" element={<MinistryLayout><AboutUs /></MinistryLayout>} />
        <Route path="/our-work" element={<MinistryLayout><OurWork /></MinistryLayout>} />
        <Route path="/units-initiatives" element={<MinistryLayout><UnitsInitiatives /></MinistryLayout>} />
        <Route path="/media-resources" element={<MinistryLayout><MediaResources /></MinistryLayout>} />
        <Route path="/get-involved" element={<MinistryLayout><GetInvolved /></MinistryLayout>} />
        <Route path="/donate-us" element={<MinistryLayout><DonateUs /></MinistryLayout>} />
        <Route path="/contact-us" element={<MinistryLayout><ContactUs /></MinistryLayout>} />
        <Route path="/transparency-legal" element={<MinistryLayout><TransparencyLegal /></MinistryLayout>} />
        <Route path="/gratitude" element={<MinistryLayout><PersonalGratitude /></MinistryLayout>} />
        <Route path="/payment-successful" element={<MinistryLayout><PaymentSuccessful /></MinistryLayout>} />
        <Route path="/test-assets" element={<MinistryLayout><TestAssets /></MinistryLayout>} />

        {/* Church Routes - Completely standalone */}
        <Route path="/church" element={<ChurchLayout><ProducerAlbum /></ChurchLayout>} />
        <Route path="/church/present-condition" element={<ChurchLayout><PresentCondition /></ChurchLayout>} />
        <Route path="/church/highlights" element={<ChurchLayout><Highlights /></ChurchLayout>} />
        <Route path="/church/why-needed" element={<ChurchLayout><WhyNeeded /></ChurchLayout>} />
        <Route path="/church/who-participate" element={<ChurchLayout><WhoParticipate /></ChurchLayout>} />
        <Route path="/church/participant-registration" element={<ChurchLayout><ParticipantRegistration /></ChurchLayout>} />
        <Route path="/church/become-sponsor" element={<ChurchLayout><BecomeSponsor /></ChurchLayout>} />
        <Route path="/church/support-matters" element={<ChurchLayout><SupportMatters /></ChurchLayout>} />
        <Route path="/church/credits" element={<ChurchLayout><Credits /></ChurchLayout>} />
        <Route path="/church/testimonies" element={<ChurchLayout><Testimonies /></ChurchLayout>} />
      </Routes>
    </>
  );
}
