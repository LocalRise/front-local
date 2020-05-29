import React from "react"


const ShopCover = ({ res_img, shop_name }) => {
    return (
        <div className="h-48">
            <div className="absolute right-0 left-0 mt-20 text-center text-3xl font-bold z-50" style={{color:"white"}}>{shop_name}</div>
            <div class="h-48 w-full flex-none bg-cover bg-center rounded-b-lg text-center -mt-5 overflow-hidden" style={{ backgroundImage: `url('${res_img}')` }}>
                <div className="opacity-25 h-48" style={{ backgroundColor: "black" }}></div>
            </div>
            {/* <img className="w-full h-20"  src={res_img} /> */}
        </div>
    )
}

export default ShopCover