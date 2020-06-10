import React from 'react'

const MenuItem = ({
  data: { menuName, menuImage, menuPrice, id },
  handleSelect,
}) => {
  return (
    // <div
    //   className="shadow-lg cursor-pointer hover:shadow-2xl"
    //   onClick={() => handleSelect(id)}
    // >
    //   {menuImage && (
    //     <div className="h-40">
    //       <img
    //         alt={menuName}
    //         className="object-cover object-center w-full h-full block"
    //         src={menuImage}
    //       />
    //     </div>
    //   )}
    //   <div className="mt-2 p-2">
    //     {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
    //       CATEGORY
    //     </h3> */}
    //     <h2 className="text-gray-900 title-font text-lg font-medium">
    //       {menuName}
    //     </h2>
    //     <p className="mt-1">{menuPrice} THB</p>
    //   </div>
    // </div>
    <div
      class={` w-full flex border-b border-grey-light ${
        menuImage === '' ? 'h-16' : ''
        } md:my-2 mx-auto md:rounded-r md:shadow-md md:border-0`}
      onClick={() => handleSelect(id)}
    >
      {menuImage && (
        <div
          class="m-1 h-20 w-1/4 flex-none bg-cover rounded text-center overflow-hidden"
          style={{ backgroundImage: `url('${menuImage}')` }}
        ></div>
      )}
      <div class="w-full mb-1 border-grey-light rounded-b flex flex-col justify-between leading-normal relative" >
        <div class="text-black font-normal text-xl ">{menuName}</div>
        {/* <p class="text-grey-darker text-base">{description}</p> */}
        <div className="absolute bottom-0 right-0 pr-3">{menuPrice} ฿</div>
      </div>
    </div>
  )
}

export default MenuItem
