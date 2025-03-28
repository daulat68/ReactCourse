import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {items?.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    {/* Left Content */}
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold text-xl">{item.card.info.name}</span>
                            <span className="font-semibold text-lg"> - ₹
                                {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>

                    {/* Right Content (Image + Button) */}
                    <div className="w-3/12 relative">
                        {/* Button positioned over Image */}
                        <button
                            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-black text-white rounded-lg shadow-lg"
                            onClick={() => handleAddItem(item)}>
                            Add +
                        </button>
                        {/* Image */}
                        <img src={CDN_URL + item.card.info.imageId} className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
