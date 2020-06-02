import React from 'react'
import MerchantList from '../../components/MerchantList'

const AppHome = ({ data }) => {
  return <>{data && <MerchantList data={data} />}</>
}

export default AppHome
