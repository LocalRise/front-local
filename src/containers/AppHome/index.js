import React, { useState, useEffect } from 'react'
import AppHome from './AppHome'

import useSheet from '../../utils/useSheet'
import { useMerchantList } from '../../services/firebase/apiHook'

const AppHomeContainer = () => {
  const { data, error, loading } = useSheet('Index')
  const { loading: ll } = useMerchantList()

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  if (loading) {
    return <div>loading...</div>
  }

  return <AppHome data={data} />
}

export default AppHomeContainer
