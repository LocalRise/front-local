import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ data, handleSelect }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data &&
          data.map((val, ind) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={ind}>
                <MenuItem data={val} handleSelect={handleSelect} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default MenuList
