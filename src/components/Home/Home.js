import React from "react";
import Headline from "../Headline/Headline";
import Technologies from "../Technologies/Technologies";
import AdditionalTechnologies from "../Additional Technologies/AdditionalTechnologies";
import Footer from "../Footer/Footer";

const Home = () => {
return(
    <div>
        <Headline/>
        <Technologies/>
        <AdditionalTechnologies/>
        <Footer/>
    </div>
)
}

export default Home;