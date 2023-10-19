import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Janu',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data: [ 2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
