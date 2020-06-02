import React, { useState, useEffect } from 'react'
import AppHome from './AppHome'

import { useMerchant } from '../../contexts'
const AppHomeContainer = () => {
  const { fetchMerchantList, merchants, error, loading } = useMerchant()
  useEffect(() => {
    fetchMerchantList()
  }, [])

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  if (loading) {
    return <div>loading...</div>
  }

  return <AppHome data={merchants} />
}

export default AppHomeContainer
