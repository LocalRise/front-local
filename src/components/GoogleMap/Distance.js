import React, { useEffect, useState } from "react"
import Axios from "axios"
import distance from 'google-distance-matrix'
import { API_KEY } from './index'
// `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latOrg},${lngOrg}&destinations=${latDtn},${lngDtn}&key=${API_KEY}`
// https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=18.288966,99.491665&destinations=18.282498,99.472319&key=AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ


// const GetDistance = () => {

//   var origins = ['18.288966,99.491665'];
//   var destinations = ['18.282498,99.472319'];

//   distance.units('metric');
//   distance.key(API_KEY);
//   distance.matrix(origins, destinations, function (err, distances) {
//     if (!err)
//       console.log(distances);
//     else
//       console.log(err)
//   })
//   return 1
// }

// export default GetDistance

// export default class GetDistance extends React.Component {
//   state = {
//     destination_addresses: [],
//     origin_addresses: [],
//     rows: [],
//   }

//   async componentDidMount() {
//     const proxyurl = "http://localhost:3000/";
//     const url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=18.288966,99.491665&destinations=18.282498,99.472319&key=AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ"; 
//     fetch(proxyurl + url)
//       .then(response => response.text())
//       .then(contents => console.log(contents))
//       .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
//     console.log(proxyurl + url)
//   }

//   render() {
//     return (
//       <ul>
//         Hello
//       </ul>
//     )
//   }
// }

const initial = {
  destination_addresses: [],
  origin_addresses: [],
  rows: [],
}

const GetDistance = props => {
  const [data, setData] = useState(initial)
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const callApi = async () => {
      try {
        setIsLoading(true)

        const res = await Axios.get(
          "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=18.288966,99.491665&destinations=18.282498,99.472319&key=AIzaSyCKxtEALdUPF6aqdV3GHywA5t4_ZlvpWiQ", {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
          }
        })
        console.log("res : ", res)
        setIsLoading(false)
        // setData(res.data)

      } catch (e) {
        setError(e)
      }
    }
    callApi()
    // console.log("hello ",data)
  }, [])

  return { data: data.values, error, isLoading }
}

export default GetDistance
