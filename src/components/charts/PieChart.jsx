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
         labels: [],
         datasets:
            [
               {
                  label: 'Rainfall',
                  backgroundColor: [
                     '#4dc9f6',
                     '#f67019',
                     '#f53794',
                     '#537bc4',
                     '#acc236',
                     '#166a8f',
                     '#00a950',
                     '#58595b',
                     '#8549ba'
                  ],
                  hoverBackgroundColor: [

                  ],
                  data: []
               }
            ]
      }
   }




   listOfSkillsAll = []

   getSkillsInfoForPie() {
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
         for (let j of i['existing']) {
            this.listOfSkillsAll.push(j[0])
         }
      }

      foo(this.listOfSkillsAll)

      let datasetsData = this.state.datasets

      datasetsData[0].data = foo(this.listOfSkillsAll)[1]
      this.setState({
         datasets: datasetsData, labels: foo(this.listOfSkillsAll)[0]
      })
   }

   componentDidMount() {
      this.getSkillsInfoForPie()
   }

   render() {
      return (
         <div className="pieChart">
            <Doughnut
               data={this.state}
               options={{
                  title: {
                     display: false,
                     text: 'Stutebt skills',
                     fontSize: 20
                  },
                  legend: {
                     fullWidth: true,
                     display: true,
                     position: 'left'
                  }
               }}
            />
         </div>
      );
   }
}