import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import PointsOfInterest from "@/components/PointsOfInterest";
import Amenities from "@/components/Amenities";
import Units from "@/components/Units";
import Gallery from "@/components/Gallery";
import OtherDevelopments from "@/components/OtherDevelopments";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <PointsOfInterest />
        <Amenities />
        <Units />
        <Gallery />
        <OtherDevelopments />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
