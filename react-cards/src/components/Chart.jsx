import React from 'react'
import {Line} from 'react-chartjs-2'
function Chart() {
    const data={
        labels:['4 Oct','6 Oct','7 Oct','8 Oct','9 Oct','10 Oct'],
        datasets:[
            {
                label:'Total daily Expenses',
                data: [2,3,4,8,1,7],
                fill:false,
                borderColor:['#007bff'],
                backgroundColor:['white'],
                pointBorderColor:['#ffc107;'],
                pointBackgroundColor:['#E0FFFF'],
                //bezierCurve : false,
                tension:['0']


            }
          
        ]
    }
    return <Line data={data}/>
}
export default Chart
