import React from 'react';
import { Bar } from 'react-chartjs-2';




export default class LineChart extends React.Component {
   constructor(props) {
      super(props)
      const data = {
         labels: ["A.B", "A.A", "M.D.D.L", "M.M.P", "D.M"],
         datasets: [{
            label: "My First dataset",
            backgroundColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
               'rgba(255,99,132,1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [5, 7, 2, 1, 4,],
         }]
      };
      const options = {
         scales: {
            xAxes: [{
               stacked: true
            }],
            yAxes: [{
               stacked: true
            }]
         },
         legend: {
            display: false,
            text: 'Stutebt skills',
            fontSize: 20
         },
      };
      this.state = {
         chartData: data,
         chartOptions: options,
      };
   }

   interestedList = []

   getDesInfo() {
      function foo(arr) {
         var a = [], b = [], prev;

         arr.sort();
         for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
               a.push(arr[i]);
               b.push(1);
            } else {
               b[b.length - 1]++;
            }
            prev = arr[i];
         }

         return [a, b];
      }

      for (const i of this.props.students) {
         for (let j of i['interested_indexes']) {
            // console.log(j)
            this.interestedList.push(j)
         }
      }

      // console.log(this.interestedList)

      foo(this.interestedList)

      let datasetsData = this.state.chartData.datasets
      datasetsData[0].data = foo(this.interestedList)[1]
      console.log(datasetsData)
      this.setState({
         datasets: datasetsData
      }, () => {
         console.log(this.state.datasets)
      })
   }

   componentDidMount() {
      this.getDesInfo()
   }


   render() {
      const { chartData, chartOptions } = this.state;
      return (
         <div>
            <Bar data={chartData} options={chartOptions} />
         </div>
      )
   }
}