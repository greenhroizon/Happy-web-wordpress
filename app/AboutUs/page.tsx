import Founder from "@/components/Founder";
import Growth from "@/components/Growth";
import Happy from "@/components/Happy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Step from "@/components/Step";
import Guides from "@/components/Guides";
import FooterSmall from "@/components/FooterSmall";

export default function AboutUs(){
    return(
        <>
        <div className="relative hidden md:block mx-auto max-w-[1920px]">
  {/* Left 60% background */}
  <div className="absolute inset-0">
    <div className="w-[60%] h-full bg-[#E5DFD5]" />
  </div>

  {/* Content */}
  <div className="relative z-10">
    <Header/>
        <Founder/>
  </div>
</div>
<div className="block md:hidden"><Header/>
<Founder/></div>
        <Growth/>
        <Happy/>
        <Guides/>
            <div className="hidden md:block">
                 <Footer/>
             </div>
               <div className="block md:hidden">
                 <FooterSmall/>
             </div>

        {/* Step section */}
        {/* <div className="relative z-0">
          <Step/>
        </div> */}

        {/* Overlapping Footer */}
        {/* <div className="relative z-20 -mt-10 md:-mt-15 xl:-mt-20">
          <div className="hidden md:block">
                 <Footer/>
             </div>
               <div className="block md:hidden">
                 <FooterSmall/>
             </div>
        </div> */}
        </>
    );
}


