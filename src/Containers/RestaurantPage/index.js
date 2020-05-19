import React, { useEffect } from "react"
import { Link } from "react-router-dom";

import useSheet from "../../utils/useSheet"
import About from "./About"
import MenuList from "./../../components/MenuList"
import ShopCover from "./ShopCover"
// import styled from "styled-components"

const IndexPage = ({ location }) => {
    const id = new URLSearchParams(location.search).get("id")
    const { data, error, isLoading } = useSheet(id)
    
    return (
        <>
            <ShopCover />
            <div>
                {/* tabbar Menu|About|Rate/Comment */}
            </div>
            <About data={data} />
            <MenuList data={data}/>
        </>
    )
}

export default IndexPage
