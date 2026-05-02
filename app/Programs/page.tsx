import Coaching from "@/components/Coaching";
import Discover from "@/components/Discover";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";



export default function Programs(){
    return(
        <div>
            <div className="bg-[#E5DFD5] rounded-b-[60px]">
                         <Header/>
            <Coaching/>
            </div>
            <Explore/>


                 <div className="hidden md:block">
                              <Footer/>
                          </div>
                            <div className="block md:hidden">
                              <FooterSmall/>
                          </div>
            
                    {/* Step section */}
                    {/* <div className="relative z-0">
                      <Discover/>
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
        </div>
    );
}