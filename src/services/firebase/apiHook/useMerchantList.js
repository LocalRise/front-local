import { useEffect, useState } from 'react'
import firestore from '../firestore'

const useMerchantList = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const querySnapshot = await firestore.collection('RestaurantsDB').get()
      const snapshots = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      setData(snapshots)
      setLoading(false)
    } catch (e) {
      setError(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, loading }
}

export default useMerchantList
