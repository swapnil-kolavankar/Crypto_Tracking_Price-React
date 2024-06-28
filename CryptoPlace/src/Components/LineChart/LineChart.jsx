import React, { useEffect } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

    const [data, setData] = usestate([["Data","Prices"]])

    useEffect(()=>{
        let dataCopy = [["Data","prices"]];
    },[historicalData])
  return (
    <div></div>
  )
}

export default LineChart