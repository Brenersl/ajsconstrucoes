import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import InstitutionalVisual from "@/components/InstitutionalVisual";
import AreasAtuacao from "@/components/AreasAtuacao";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsShowcase />
        <InstitutionalVisual />
        <AreasAtuacao />
        <VideoSection />
        <ContactSection />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
