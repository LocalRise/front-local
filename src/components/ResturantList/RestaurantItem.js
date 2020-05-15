import React from 'react'
import useSheet from './../../utils/useSheet'
import { mapByResDetail } from "./../../utils/mapSheet"
import Link from 'next/link'


const RestaurantItem = ({ data: { id, name } }) => {
    const { data, error, loading } = useSheet(id)
    const { shop_name, res_img, tel, short_des_shop } = data && data.length >= 2 ? mapByResDetail(data) : {}
    return (
        <Link href="/">
            <div className="pl-5 pr-5 pt-5">
                <div
                    key={id}
                    className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-xl rounded-md"
                >
                    <div>
                        <img class="object-cover h-40 w-full rounded-md" src={res_img || "https://semantic-ui.com/images/wireframe/image.png"} />
                    </div>
                    <div className=" p-3">
                        <p className="font-semibold text-lg text-gray-700 leading-normal">{shop_name}</p>
                        {short_des_shop && <p className="text-gray-500">{short_des_shop}</p>}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantItem;