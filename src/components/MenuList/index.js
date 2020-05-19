import React, { useEffect } from "react"
import MenuItem from "./MenuItem"
import { mapByMenu } from "./../../utils/mapSheet";


const MenuList = ({ data }) => {
    const mappedData = data ? mapByMenu(data) : []
    return (
        <>
            {mappedData &&
                mappedData.map((val, ind) => {
                    return (
                        <MenuItem key={ind} data={val} />
                    )
                })}
        </>
    )
}

export default MenuList