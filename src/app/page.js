import Header from "@/Components/Common/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import variable from "./page.module.scss";
import HeroSection from "@/Components/LandingPage/HeroSection/HeroSection";
import Categories from "@/Components/LandingPage/Categories/Categories";
import Enterprise from "@/Components/LandingPage/Enterprise/Enterprise";
import Footer from "@/Components/Common/Footer/Footer";
export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className={`${variable.heroSectionBgColor}`}>
        <Header />
        <HeroSection />
      </section>
      <Categories />
      <Enterprise />
      <Footer />
    </>
  );
}
