import React from 'react';
import { Doughnut } from 'react-chartjs-2';


// const state = {
//    labels: ['January', 'February', 'March',
//       'April', 'May'],
//    datasets: [
//       {
//          label: 'Rainfall',
//          backgroundColor: [
//             '#B21F00',
//             '#C9DE00',
//             '#2FDE00',
//             '#00A6B4',
//             '#6800B4'
//          ],
//          hoverBackgroundColor: [
//             '#501800',
//             '#4B5000',
//             '#175000',
//             '#003350',
//             '#35014F'
//          ],
//          data: [65, 59, 80, 81, 56]
//       }
//    ]
// }

export default class PieChart extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         labels: ['January', 'February', 'March',
            'April', 'May'],
         datasets: [
            {
               label: 'Rainfall',
               backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
               ],
               hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#003350',
                  '#35014F'
               ],
               data: [2165, 59, 80, 81, 56]
            }
         ]
      }
   }

   componentDidMount() {
      for (const i of this.props.students) {
         console.log(i['existing_indexes'])
      }
   }

   render() {
      return (
         <div className="pieChart">
            <Doughnut
               data={this.state}
               options={{
                  title: {
                     display: false,
                     text: 'Average Rainfall per month',
                     fontSize: 20
                  },
                  legend: {
                     display: true,
                     position: 'right'
                  }
               }}
            />

            {/* <Pie
               data={state}
               options={{
                  // responsive: false,
                  // maintainAspectRatio: false,



                  scales: {
                     // yAxes: [{
                     //    ticks: {
                     //       beginAtZero: true
                     //    }
                     // }]
                  },
                  title: {
                     display: true,
                     text: 'Average Rainfall per month',
                     fontSize: 20,
                  },

                  legend: {
                     display: true,
                     position: 'right',
                  }
               }}
            /> */}
         </div>
      );
   }
}