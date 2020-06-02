import React from 'react'
import { mapByRestaurant } from '../../utils/mapSheet'
import MerchantItem from './MerchantItem'
import { NavLink } from 'react-router-dom'

const MerchantList = ({ data }) => {
  return (
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-wrap ">
          {data &&
            data.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full"
                  to={`/restaurant?id=${item.id}`}
                >
                  <MerchantItem data={item} />
                </NavLink>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default MerchantList
