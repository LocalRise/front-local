import React from "react"
import RestaurantItem from "./RestaurantItem.js"

const RestaurantList = ({ data }) => {
    return (
        <>
            {data &&
                data.map((item, index) => {
                    return (
                        <RestaurantItem data={item, index} />
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
