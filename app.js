import React from "react";
import ReactDOM from "react-dom";
// WOW KITCHEN

/**
 * Header
 * - logo
 * - Nav-Items
 * 
 * Body
 * => search
 *  -ResturantContainer
 *   - resturantcard
 * 
 * Footer
 *   => Copyright
 *   Links
 *   Address
 *   Contact
 * 
 * 
 */



const root = ReactDOM.createRoot(document.getElementById("root"));

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className = "logo"  src ="https://th.bing.com/th/id/OIP.cyZ3lgkn9WWKVmkME5PLxQHaE8?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            </div>
            <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>
            </div>
            
        </div>
    )
};

const styleCard = {
    backgroundColor : "#f0f0f0",
}
const ResturantCard =(props)=>{
    return(
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            alt="res-logo" src ="https://th.bing.com/th/id/OIP.-6LCbvILDH2gVukOSZmy_AHaD8?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            <h3>{props.resName}</h3>
            <br></br>
            <h4>{props.cuisins}</h4>
            <br></br>
            <h4>{props.rating}</h4>
            <br></br>
            <h4>{props.time}</h4>
        </div>
    )
}

const Body = ()=>{
   return(
    <div className="body">
       <div className="Search">Search</div>
       <div className="res-container">
        <ResturantCard resName = "Dad's kitcehn" 
                       cuisins ="WARNING - Only for Health freaks"
                       rating = "4.9"
                       time ="30 Minutes"/>
        <ResturantCard resName = "Nani-Ma's Food" 
                       cuisins ="Zero compormise in Taste and kafi sara oil with lots of payar"
                       rating = "4.3"
                       time ="40 Minutes" />
        <ResturantCard resName = "Mamma's Cafe" 
                       cuisins ="Far from Home? No problem , This is for you"
                       rating = "4.9"
                       time ="60 Minutes"/>
        <ResturantCard resName = "Palak Momes" 
                       cuisins ="Thela vala momes with chaps"
                       rating = "5"
                       time ="30 Minutes"/>
        <ResturantCard resName = "Ishan chicken" 
                       cuisins ="Butter chicken and Butter Naan specials"
                       rating = "4.9"
                       time ="20 Minutes"/>
        <ResturantCard resName = "Uncle's HuB Cafe" 
                       cuisins ="For Complainant"
                       rating = "4.7"
                       time ="50 Minutes"/>
        <ResturantCard resName = "Meghna Foods" 
                       cuisins ="Biryani, South Indian , Asian"/>
        <ResturantCard resName = "Second Wife" 
                       cuisins ="Bihar special"/>
        <ResturantCard resName = "prem's cafe" 
                       cuisins ="For those who has Gastritis problem"/>
        <ResturantCard resName = "KFC" 
                       cuisins ="For My type of people"/>
        <ResturantCard resName = "Burger king" 
                       cuisins ="IF MCD is Close, Go home "/>
        <ResturantCard resName = "Pani puri Wala" 
                       cuisins ="Aao Golgappe khao"/>
        <ResturantCard resName = "Veg HUB" 
                       cuisins ="only for vegetarian's"/>
        
    </div>
    </div>
   );
};




const AppLayout = () =>{
    return(
        <div className = "app">
         <Header />
         <Body/>
        </div>
    )
}






root.render(<AppLayout />);




