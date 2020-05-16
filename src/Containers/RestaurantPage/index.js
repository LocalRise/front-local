import React, { useEffect } from "react"
import { Link } from "react-router-dom";

import useSheet from "../../utils/useSheet"
import { mapByResDetail } from "../../utils/mapSheet"
import Info from "./Info"
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
    return (
        <>
            {/* <Info data={data} /> */}
            <div className={`p-5 text-lg ${isOpen?'block':'hidden'}`}>
                <a className="block py-1" href={`${facebook}`} target="_blank">
                    {shop_name}
                </a>
                <a className="block py-1" href={`tel:${tel}`} >
                    {tel}
                </a>
                <a className="block py-1" href={`${res_location}`} target="_blank">
                    See in map
                </a>
                {open_time || open_date ? (
                    <span className="block py-1">{open_date ? (<span>{open_date}&nbsp;</span>) : ("")}{open_time}</span>
                ) : ("")}
                <span className="block py-1 text-sm">{descript_shop}</span>
            </div>
            <p>{shop_name}</p>
        </>
    )
}

export default IndexPage
