import React from 'react'
import useSheet from './../../utils/useSheet'
import { mapByResDetail } from "./../../utils/mapSheet"


const RestaurantItem = ({ data: { id, name } }) => {
    const { data, error, isLoading } = useSheet(id)
    const { shop_name, res_img, tel } = data && data.length >= 2 ? mapByResDetail(data) : {}
    return (
        <div className="pl-5 pr-5 pt-5">
            <div
                key={id}
                className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-xl rounded-md"
            >
                <div>
                    <img class="object-cover h-40 w-full rounded-md" src={res_img || "https://semantic-ui.com/images/wireframe/image.png"} />
                </div>
                <div className="m-2 p-1">
                    <p className="text-base text-gray-700 leading-normal">{shop_name}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantItem;