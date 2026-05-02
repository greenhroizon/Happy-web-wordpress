import Clarity from "@/components/Clarity";
import Designed from "@/components/Designed";
import Emotional from "@/components/Emotional";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";
import Practice from "@/components/Practice";

export default function Home() {
  return (
    <>
    <Practice/>
    <Designed/>
    <Clarity/>
    <FAQ/>
    <Emotional/>
    <div className="hidden md:block">
        <Footer/>
    </div>
      <div className="block md:hidden">
        <FooterSmall/>
    </div>
    </>
  );
}