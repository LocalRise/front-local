import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import useSheet from '../../utils/useSheet'
import AboutDropdown from './AboutDropdown'
import MenuList from '../../components/MerchantList/MenuList'
import ShopCover from './ShopCover'
import { useMerchantMenu } from '../../services/firebase/apiHook'

// import styled from "styled-components"

const IndexPage = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const { data, error, isLoading } = useMerchantMenu(id)
  let isOpen = true

  return (
    <>
      {/* <ShopCover res_img={res_img} shop_name={shop_name} /> */}

      <div>{/* tabbar Menu|About|Rate/Comment */}</div>
      {/* <AboutDropdown dataMo={dataMo} /> */}
      <p className="text-2xl font-bold ml-5 md:ml-10 lg:ml-24">รายการอาหาร</p>
      <MenuList data={data} />
    </>
  )
}

export default IndexPage
