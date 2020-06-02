import React from 'react'

const MenuItem = ({ data: { menuName, menuImage, menuPrice } }) => {
  return (
    <div className="shadow-lg">
      {menuImage && (
        <div className="h-40">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={menuImage}
          />
        </div>
      )}
      <div className="mt-2 p-2">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {menuName}
        </h2>
        <p className="mt-1">{menuPrice}</p>
      </div>
    </div>
    // <div
    //   class={`max-w-md w-full flex border-b border-grey-light ${
    //     image === '' ? 'h-16' : ''
    //   } md:my-2 mx-auto md:rounded-r md:shadow-md md:border-0`}
    // >
    //   {image && (
    //     <div
    //       class="m-1 h-24 w-1/4 flex-none bg-cover rounded text-center overflow-hidden"
    //       style={{ backgroundImage: `url('${image}')` }}
    //     ></div>
    //   )}
    //   <div class="w-full mb-5 border-grey-light bg-white rounded-b p-4 flex flex-col justify-between leading-normal relative">
    //     <div class="mb-6">
    //       <div class="text-black font-normal text-xl ">{menu}</div>
    //       {/* <p class="text-grey-darker text-base">{description}</p> */}
    //       <div className="absolute bottom-0 right-0 pr-6">{price} ฿</div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MenuItem
