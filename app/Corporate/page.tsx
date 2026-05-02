import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";
import ProgramsGrid from "@/components/ProgramsGrid";
import Sessions from "@/components/Sessions";
import Trust from "@/components/Trust";
import Wellness from "@/components/Wellness";
import Work from "@/components/Work";
import { Session } from "inspector/promises";


export default function Corporate(){
    return(
        <>
            <Wellness/>
            <Sessions/>
            <ProgramsGrid/>
            <Trust/>
            <Work/>
           <div className="hidden md:block">
                  <Footer/>
              </div>
                <div className="block md:hidden">
                  <FooterSmall/>
              </div>
        </>
    );
}
