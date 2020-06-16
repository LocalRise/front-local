import React from 'react'

const MerchantItem = ({ data: { id, image, tel, name, openingDay } }) => {
  const today = Date().toString().substring(0, 3).toLowerCase()

  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden">
      <div className="block relative h-48 rounded-md overflow-hidden">
        <img
          alt={name + ' image'}
          className="object-cover object-center w-full h-full block"
          src={image}
          loading="lazy"
        />
      </div>
      <div className="p-3 relative">
        <div className={`absolute right-0 top-0 -mt-4 rounded-full pt-1 px-2 ${openingDay.toLowerCase().split(" ").includes(today) ? "bg-teal-600" : "bg-orange-600"}`}>
          <p className="text-white font-bold">{openingDay.toLowerCase().split(" ").includes(today) ? "วันนี้ร้านเปิด" : "วันนี้ร้านปิด"}</p>
        </div>
        {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3> */}
        <h2 className="text-gray-900 title-font text-lg">{name}</h2>
        <p className="mt-1 text-sm">{tel}</p>
      </div>
    </div>
  )
}

export default MerchantItem
