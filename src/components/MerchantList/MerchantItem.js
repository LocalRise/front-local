import React from 'react'
import useSheet from '../../utils/useSheet'
import { mapByResDetail } from '../../utils/mapSheet'

const MerchantItem = ({ data: { id, image, tel, name } }) => {
  return (
    <div>
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt={name + ' image'}
          className="object-cover object-center w-full h-full block"
          src={image}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
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
