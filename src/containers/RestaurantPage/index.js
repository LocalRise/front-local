import React, { useEffect } from "react"
import { Link } from "react-router-dom";

import useSheet from "../../utils/useSheet"
import AboutDropdown from "./AboutDropdown"
import MenuList from "./../../components/MenuList"
import ShopCover from "./ShopCover"
import { mapByResDetail } from "../../utils/mapSheet"

// import styled from "styled-components"

const IndexPage = ({ location }) => {
    const id = new URLSearchParams(location.search).get("id")
    const { data, error, isLoading } = useSheet(id)
    const {
        shop_name,
        res_img,
        facebook,
        location: res_location,
        open_date,
        open_time,
        tel,
        descript_shop
    } = data && data.length >= 2 ? mapByResDetail(data) : {}
    let isOpen = true
    const dataMo = { shop_name, facebook, location, open_date, open_time, tel, descript_shop, isOpen }

    return (
        <>
            <ShopCover res_img={res_img} shop_name={shop_name} />
            
            <div>
                {/* tabbar Menu|About|Rate/Comment */}
            </div>
            <AboutDropdown dataMo={dataMo} />
            <p className="text-2xl font-bold ml-5 md:ml-10 lg:ml-24">รายการอาหาร</p>
            <MenuList data={data} />
        </>
    )
}

export default IndexPage
