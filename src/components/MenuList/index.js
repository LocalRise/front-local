import React, { useEffect } from "react"
import MenuItem from "./MenuItem"
import { mapByMenu } from "./../../utils/mapSheet";


const MenuList = ({ data }) => {
    const mappedData = data ? mapByMenu(data) : []
    return (
        <div className="flex flex-wrap mr-1 ml-1">
            {mappedData &&
                mappedData.map((val, ind) => {
                    return (<MenuItem key={ind} data={val} />)
                })}
        </div>
    )
}

export default MenuList