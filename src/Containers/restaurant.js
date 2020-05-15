import React, { useEffect } from "react"
import { Link } from "react-router-dom";

import useSheet from "./../utils/useSheet"
import { mapByResDetail } from "./../utils/mapSheet"
// import styled from "styled-components"
// import { MdAccessTime, MdLocationOn } from "react-icons/md"
// import { FaFacebook } from "react-icons/fa"
// import { IoIosCall } from "react-icons/io"
// import { FiPhoneOutgoing } from "react-icons/fi"
// import ClipLoader from "react-spinners/ClipLoader"

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
    return (
        <>
            <p>{shop_name}</p>
            {console.log(data)}
        </>
    )
}

export default IndexPage
