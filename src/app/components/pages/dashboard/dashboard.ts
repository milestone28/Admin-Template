import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ToggleService } from '../../../shared/toggle';
import { Subscription } from 'rxjs';

Chart.register(
  ...registerables
);

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  private subscription: Subscription

  constructor(private toggleService: ToggleService) {

  }
  public config: any = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Sales',
        data: [65, 59, 80, 81],
        borderWidth: 1
      },
      {
        label: 'Productions',
        data: [55, 29, 86, 96],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      //maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        }
      }
      //     position: 'top',
      //   },
      //   title: {
      //     display: true,
      //     text: 'Chart.js Bar Chart'
      //   }
      // }
    }
  };

  chart: any;

  ngOnInit(): void {
    this.subscription = this.toggleService.isDarkModeState$.subscribe(
      (state) => {
        // if (state) {
        //   // this.chart.options.borderColor = "yellow";
        //   Chart.defaults.color = "yellow";
        // } else {
        //   this.chart.options.borderColor = "blue";
        //   Chart.defaults.color = "blue";
        //   console.log("wasdsa mode is enabled");

        // }
        // this.chart.update();
      }
    );

    Chart.defaults.color = "#6482AD";
    this.chart = new Chart('myChart', this.config);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
