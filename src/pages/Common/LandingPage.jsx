import React from 'react'
import descImg1 from "../../assets/images/descImg1.png";
import descImg3 from "../../assets/images/descImg3.jpg";
import heroImage2 from "../../assets/images/HeroImage2.png";
import Description from '../../Components/Core/LandingPage/Description';
const LandingPage = () => {
  let heading = [
    "Transparent, market-driven, equitable, and value-focused pricing.",
    "Sellers can set prices, manage bids, and maximize profits efficiently.",
  ];
  let discription = [
    "Vikreta's bidding and asking system ensures a transparent and competitive pricing mechanism by empowering buyers and sellers to actively engage in setting prices. Sellers list their products with a minimum asking price, while buyers place bids based on their willingness to pay. This dynamic process allows the market to determine the final price, ensuring fairness and accuracy. Buyers benefit from competitive bidding to secure products at reasonable prices, while sellers receive optimal value through market-driven demand. The system fosters trust by making all bids and asks visible, reducing manipulation and creating an equitable marketplace for both parties.",
    "Sellers on Vikreta have full control over their asking price, allowing them to set the minimum price they are willing to accept. They receive bids from interested buyers, creating a competitive environment where the highest offer wins. Sellers can choose to accept or reject any bid, ensuring they receive a fair value for their product. This flexibility gives sellers the power to make decisions based on real-time market demand. The auction-based system often results in sellers receiving a higher price than they would through traditional fixed-price listings, as the bidding process encourages competition among buyers.",
  ];
  return (
    <div className="text-center flex flex-col  text-[#dcdcdc] gap-2 justify-center items-center overflow-x-hidden ">
    <div className="md:w-[12oopx] lg:w-[1500px]">
       <div className="flex flex-col gap-4 justify-center items-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage2})` }}>
          <div className="inset-0 bg-[#0e0f14] opacity-75 md:flex md:flex-col justify-center items-center w-full h-full">
          <div className="relative text-center">
            <h1 className="text-6xl font-bold mr-16">
              <span className="font-bold bg-gradient-to-r from-lime-400  to-green-400 bg-clip-text text-transparent">
                <a href='/'>Vikreta</a>
              </span>{" "}
              Auction-based Marketplace for All Products
            </h1>
            <p className="mt-6 text-2xl font-medium text-justify text-gray-300 bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
                Vikreta is revolutionizing online marketplaces with its innovative bid and ask system, providing a secure and efficient platform for buying and selling products. Join the Vikreta community today and experience the benefits for yourself.
              </p>
          </div>
          </div>
       </div>
       <div>
        <Description
          heading={heading[0]}
          desc={discription[0]}
          row="md:flex md:flex-row"
          img={descImg1}
          btnText={["Know More", "Try Now"]}
        />
        <Description
          heading={heading[1]}
          desc={discription[1]}
          row="md:flex md:flex-row-reverse"
          img={descImg3}
          btnText={["Know More", "Try Now"]}
        />
      </div>
    </div>
    
    </div>
  )
}

export default LandingPage