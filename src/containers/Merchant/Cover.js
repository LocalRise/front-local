import React from 'react'

const ShopCover = ({ merchant:{foodType,id,image,name} }) => {
  return (
    <div className="h-48 w-screen ">
      <div
        className="absolute right-0 left-0 mt-24 ml-40 text-left text-5xl font-bold z-30"
        style={{ color: 'white' }}
      >
        {name}
      </div>
      <div
        class="h-48 w-full flex-none bg-cover bg-center rounded-b-lg text-center  overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div
          className="opacity-50 h-48"
          style={{ backgroundColor: '#313131' }}
        ></div>
      </div>
      {/* <img className="w-full h-20"  src={res_img} /> */}
    </div>
  )
}

export default ShopCover
