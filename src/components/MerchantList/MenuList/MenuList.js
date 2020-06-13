import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ data, handleSelect }) => {
  return (
    <div className="container p-5 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data &&
          Object.keys(data).map((key, ind) => {
            return (
              <div className="lg:w-1/3 md:w-1/2 p-1 w-full" key={data[key].id} >
                <MenuItem data={data[key]} handleSelect={handleSelect} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default MenuList
