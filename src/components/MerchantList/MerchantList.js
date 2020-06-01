import React from 'react'
import { mapByRestaurant } from '../../utils/mapSheet'
import MerchantItem from './MerchantItem'
import { NavLink } from 'react-router-dom'

const MerchantList = ({ data }) => {
  const mappedData = data ? mapByRestaurant(data) : []

  return (
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap ">
          {mappedData &&
            mappedData.map((item, index) => {
              return (
                <NavLink
                  className="lg:w-1/5 md:w-1/2 p-4 w-full"
                  to={`/restaurant?id=${item.id}`}
                >
                  <MerchantItem key={index} data={item} />
                </NavLink>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default MerchantList
