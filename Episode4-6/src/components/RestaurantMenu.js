import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu= () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;


  const restaurantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  const itemCards = resInfo?.cards?.find(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(itemCards)

  const menuCategory = itemCards.find(
    (item) => item?.card?.card?.itemCards 
  );
  
  const menuItems = menuCategory?.card?.card?.itemCards || [];


return (
  <div className="menu">
    <h1>{name}</h1>
    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
    <h2>Menu</h2>
    <ul>
      {menuItems.map((item, id) => {
        const name = item?.card?.info?.name || "Unnamed Item";
        const price =
          item?.card?.info?.finalPrice ??
          item?.card?.info?.price ??
          item?.card?.info?.defaultPrice ??
          null; 

        return (
          <li key={id}>
            {name} {price !== null ? `- ₹${price / 100}` : "- Price Not Available"}
          </li>
        );
      })}
    </ul>
  </div>
);

}
export default RestaurantMenu;


