import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ data }) => {
  return (
    <div className="flex flex-wrap mr-1 ml-1">
      {data &&
        data.map((val, ind) => {
          return <MenuItem key={ind} data={val} />
        })}
    </div>
  )
}

export default MenuList
