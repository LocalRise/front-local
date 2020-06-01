import React from 'react'
import useSheet from '../../utils/useSheet'
import { mapByResDetail } from '../../utils/mapSheet'

const MerchantItem = ({ data: { id, name } }) => {
  const { data, error, loading } = useSheet(id)
  const { shop_name, res_img, tel, short_des_shop } =
    data && data.length >= 2 ? mapByResDetail(data) : {}
  const mockOpen = 'open'
  return (
    <div>
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt={shop_name + ' image'}
          className="object-cover object-center w-full h-full block"
          src={res_img}
          loading="lazy"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {/* CATEGORY */}
        </h3>
        <h2 className="text-gray-900 title-font text-lg">{shop_name}</h2>
        <p className="mt-1 text-sm">{tel}</p>
      </div>
    </div>
  )
}

export default MerchantItem
