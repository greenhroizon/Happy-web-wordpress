import BookingDetailsForm from "@/components/BookingDetailsForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Journery from "@/components/Journey";
import Paymentpay from "@/components/paymentpay";
import Secure from "@/components/Secure";

import FooterSmall from "@/components/FooterSmall";
export default function Payment(){
    return(
        <>
        <Journery/>
        <Secure/>
               <div className="hidden md:block">
                                     <Footer/>
                                 </div>
                                   <div className="block md:hidden">
                                     <FooterSmall/>
                                 </div>
        </> 
    );
}


