import React from "react"
import { mapByRestaurant } from "../../utils/mapSheet"
import RestaurantItem from "./RestaurantItem.js"
import { Link} from "react-router-dom";



const RestaurantList = ({ data }) => {
    const mappedData = data ? mapByRestaurant(data) : []

    return (
        <div className="flex flex-wrap justify-around">
            {mappedData &&
                mappedData.map((item, index) => {
                    return (
                        <Link to={`/restaurant?id=${item.id}`} >
                            <RestaurantItem key={index} data={item} />
                        </Link>
                    );
                })}
        </div>
    )
}

export default RestaurantList
