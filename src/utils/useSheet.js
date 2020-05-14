import React, { useEffect, useState } from "react"
import Axios from "axios"

const spreadsheetId = "1Zm7MahKHeaWiyDKjV9_BEOgcZ4BXAVwWm_eSQ9-sapc"
const API_KEY = "AIzaSyB9odbwlRW5Gk_5KcjqtdJVGK_0kjyi97Y"

const initial = {
  range: "",
  majorDimension: "",
  values: [],
}

const useSheet = sheetname => {
  const [data, setData] = useState(initial)
  const [error, setError] = useState()
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    const callApi = async () => {
      try {
        setIsLoading(true)
        const res = await Axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetname}?key=${API_KEY}`
        )
        setIsLoading(false)
        setData(res.data)
      } catch (e) {
        setError(e)
      }
    }

    callApi()
  }, [])

  return { data: data.values, error, loading }
}

export default useSheet
