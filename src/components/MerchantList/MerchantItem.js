import React from 'react'

const MerchantItem = ({ data: { id, image, tel, name } }) => {
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
      <div className="p-3">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {/* CATEGORY */}
        </h3>
        <h2 className="text-gray-900 title-font text-lg">{name}</h2>
        <p className="mt-1 text-sm">{tel}</p>
      </div>
    </div>
  )
}

export default MerchantItem
