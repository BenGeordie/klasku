import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.page.html',
  styleUrls: ['./admin-teacher.page.scss'],
})
export class AdminTeacherPage implements OnInit {
  public classes = [];

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor() { }

  ngOnInit() {
    this.classes = [
      {
        title : 'ButterFly Class',
        subtitle: ['Hugo', 'Hubert', 'Vian', 'Fino'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Caterpillar Class',
        subtitle: ['Andy', 'Buzz', 'Woody', 'Barbie'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Physics 1A',
        subtitle: ['Gailelo', 'Newton', 'Woody', 'Barbie'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Physics 1B',
        subtitle: ['Andrew', 'Raindy', 'Sebastian', 'Nate'],
        imageUrl: 'https://via.placeholder.com/100'
      }];
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  getSentimentScore() {
    return 'XX'
  }

  getEngagementLevel() {
    return 'XX'
  }

  getAverageMessages() {
    return 'XX'
  }

  getTotalMessages() {
    return 'XX'
  }

  getTotalStudents() {
    return 'XX'
  }

  getTotalPosts() {
    return 'XX'
  }

}
