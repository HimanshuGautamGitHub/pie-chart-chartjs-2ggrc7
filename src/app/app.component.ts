import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public doughnutChartLabels: string[] = [
    this.dateForamt(new Date()),
    'In-Store Sales',
    'Mail-Order Sales'
  ];
  public doughnutChartData: number[] = [350, 200, 100];
  chartOptions = {
    responsive: true
  };

  dateForamt(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() -
      1}-${date.getDate()}\n ${date.getHours()}:${date.getMinutes()} `;
  }
}
