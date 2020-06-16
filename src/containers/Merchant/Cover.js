import React from 'react'

const ShopCover = ({ merchant:{foodType,id,image,name} }) => {
  return (
    <div className="h-64 w-full -mb-20 ">
      <div
        className="absolute mx-auto mt-10 text-left text-5xl font-bold z-30"
        style={{ color: 'white' }}
        >
        {name}
      </div>
      {/* <div
        className="absolute mx-auto mt-10 text-left text-2xl font-bold z-30"
      >Hllo</div> */}
      <div
        class="absolute inset-0 h-64 w-full flex-none bg-cover bg-center rounded-b-lg text-center overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div
          className="opacity-75 h-64"
          style={{ backgroundColor: '#313131' }}
        ></div>
      </div>
      {/* <img className="w-full h-20"  src={res_img} /> */}
    </div>
  )
}

export default ShopCover
