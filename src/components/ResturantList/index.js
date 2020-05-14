import React from "react"
import { mapByRestaurant } from "./../../utils/mapSheet"
import RestaurantItem from "./RestaurantItem.js"

const RestaurantList = ({ data }) => {
    const mappedData = data ? mapByRestaurant(data) : []

    return (
        <>
            {mappedData &&
                mappedData.map((item, index) => {
                    return (
                        <>
                            <RestaurantItem key={index} data={item}/>
                        </>
                    );
                })}
        </>
        // <FlexStyled>
        //   {mappedData &&
        //     mappedData.map((val, ind) => {
        //       return (
        //         <BoxStyled m={3}>
        //           <RestaurantItem key={ind} data={val} />
        //         </BoxStyled>
        //       )
        //     })}
        // </FlexStyled>
    )
}

export default RestaurantList
