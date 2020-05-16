import React from 'react'
import useSheet from '../../utils/useSheet'
import { mapByResDetail } from "../../utils/mapSheet"


const RestaurantItem = ({ data: { id, name } }) => {
    const { data, error, loading } = useSheet(id)
    const { shop_name, res_img, tel, short_des_shop } = data && data.length >= 2 ? mapByResDetail(data) : {}
    const mockOpen = "open"
    return (
        <div className="pl-5 pr-5 pt-1 max-w-md mx-auto">
            <div
                key={id}
                className="bg-gray-100 shadow-xl rounded-md relative "
            >
                <div>
                    <img class="object-cover h-40 w-full rounded-md" src={res_img || "https://semantic-ui.com/images/wireframe/image.png"} />
                </div>
                <div className="absolute bottom-0 right-0 mr-2 ">
                    {mockOpen == "open" ? (
                        <span className="inline-block bg-green-500 rounded-full px-2 text-xs font-semibold text-white">OPEN</span>
                        ) : (
                            <span className="inline-block bg-orange-500 rounded-full px-2 text-xs font-semibold text-white">ClOSE</span>
                        )
                    }
                </div>
                <div className=" pl-3 p-1">
                    <p className="font-semibold text-lg text-gray-700 leading-normal">{shop_name}</p>
                    <p className="text-gray-500">{short_des_shop}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantItem;