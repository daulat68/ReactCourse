import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, 
      name, 
      avgRating,cuisines, 
      costForTwo, 
      deliveryTime}= resData?.info; 
    
    return(
        <div className="m-4 p-4 w-[280px] rounded-lg bg-gray-50 hover:bg-gray-200">
            <img 
            className="rounded-lg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId}
               />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating}star</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}minutes</h4>
        </div>
    );
};


export const withPromotedLabel = (props) => {
    return ()=> {
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props} />
        </div>
    }
}

export default RestaurantCard;