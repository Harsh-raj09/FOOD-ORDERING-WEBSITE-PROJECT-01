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
    const {resData} = props;
    return(
        <div className="res-card" style={styleCard}>
          <img
          className="res-logo"
          alt = "res-logo"
           src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.info.cloudinaryImageId
           } 
           />
           
            <h3>{resData.info.name}</h3>
            <br></br>
            <h4>{resData.info.cuisines.join(" ,")}</h4>
            <br></br>
            <h4>{resData.info.avgRating}</h4>
            
            <h4>{resData.info.costForTwo}</h4>
            <br></br>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

const resList =   [
    {
        "info": {
            "id": "42946",
            "name": "Oven Story Pizza - Standout Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/0e4e53e6-4d81-427a-a884-00e08707e166_42946.JPG",
            "locality": "Huda Complex",
            "areaName": "Sector 12 Gurgaon",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "3534",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=16502625~p=0~adgrpid=16502625#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=42946~eid=03153fa6-f89e-446f-9384-7fee1dec9618~srvts=1723138408001~collid=45995",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-35 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-08 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=42946",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },

    {
        "info": {
            "id": "612059",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Sadar Bazar",
            "areaName": "Sector 11",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 0.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:55:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                    "description": "Delivery!"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=612059",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "368572",
            "name": "Hongs Kitchen Hearty! Tasty ! Chinese!",
            "cloudinaryImageId": "ds7htpcxi7fbnycb2pgo",
            "locality": "Huda Market",
            "areaName": "Sector 31",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan"
            ],
            "avgRating": 4.3,
            "parentId": "9547",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=368572",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "332226",
            "name": "Tossin Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/d7333718-7fca-4f73-ae87-29d162b92955_332226.jpg",
            "locality": "Sector 50",
            "areaName": "Sector 50",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "1778",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-35 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 06:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                    "description": "Delivery!"
                                }
                            },
                            {
                                "attributes": {
                                    "imageId": "newg.png",
                                    "description": "Gourmet"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "100+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=332226",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "622051",
            "name": "MOJO Pizza - 2X Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/5a4a17bf-c085-44d5-8923-64a5df052858_622051.JPG",
            "locality": "Sector 14, Gurgaon",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "11329",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": ""
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=622051",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "750246",
            "name": "Daily Kitchen - Homely Meals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750246.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14, Gurgaon",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Home Food",
                "Indian",
                "North Indian",
                "Thalis"
            ],
            "avgRating": 4.5,
            "parentId": "444382",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=750246",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "643686",
            "name": "WeFit - Protein Bowls, Salads & Sandwiches",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/8162aab2-4ccd-431e-8163-ad18749b95f5_643686.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Keto",
                "Snacks"
            ],
            "avgRating": 4.5,
            "parentId": "355285",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "brand",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=643686",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "390078",
            "name": "NH1 Bowls - Highway To North",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c0db57b4-bada-434b-a0d7-4d6031b657fd_390078.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            "avgRating": 4.6,
            "parentId": "22452",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=390078",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "681460",
            "name": "LeanCrust Pizza- ThinCrust Experts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/2fe1a7bd-3a1b-4ad0-939d-2a78d5c6b110_681460.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "11216",
            "avgRatingString": "4.6",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=681460",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "279323",
            "name": "Laziz Rasoi",
            "cloudinaryImageId": "nm65bgann1pzkwr0hvq6",
            "locality": "Bata Chowk",
            "areaName": "Dwarka",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Asian",
                "Chinese",
                "Indian"
            ],
            "parentId": "11687",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-15 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹159",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.7",
                    "ratingCount": "6"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=279323",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "391025",
            "name": "ZAZA Mughal Biryani",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/fb17d94f-c59d-47af-84d1-fe7b8a217427_391025.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Awadhi"
            ],
            "avgRating": 4.3,
            "parentId": "22473",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=391025",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "692079",
            "name": "BOOM Sandwich - Sub of India",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/62bc2619-1d5e-458c-a009-403c699bad08_692079.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Snacks",
                "Indian",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "401169",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=692079",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "740375",
            "name": "Hola Pasta - Fresh Gourmet Pasta",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/f2d8b46a-499b-4c6a-b4b9-60e4f602486a_740375.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "418135",
            "avgRatingString": "4.3",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=740375",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "681212",
            "name": "GLOBO Ice Creams Of The World",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/c83a3f4b-688c-4eb3-a4a1-9539053221f1_681212.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Bakery"
            ],
            "avgRating": 4.6,
            "parentId": "22303",
            "avgRatingString": "4.6",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-40 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=681212",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "313627",
            "name": "Itminaan Matka Biryani - Slow Cooked",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/7c1722f3-d8a8-43ee-9711-9ae46d1769c0_313627.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Mughlai"
            ],
            "avgRating": 4.4,
            "parentId": "107673",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 55,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "45-55 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=313627",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "274839",
            "name": "Mealful Rolls - India's Biggest Rolls",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/6aa2c82d-9bc7-4ca0-8849-1ceab1eeb16e_274839.JPG",
            "locality": "Old DLF Colony",
            "areaName": "Sector 14",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "10390",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-09 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=274839",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
];

   
            
const Body = ()=>{
   return(
    <div className="body">
       <div className="Search">Search</div>
       <div className="res-container">
        {
            resList.map((resturant)=>(<ResturantCard key = {resturant.info.id} resData ={resturant}/>))
        }
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




