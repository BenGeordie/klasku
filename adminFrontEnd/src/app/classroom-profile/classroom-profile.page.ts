import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DummyService } from "../services/dummy.service";
import { GeordieService } from "../services/geordie.service";

@Component({
  selector: 'app-classroom-profile',
  templateUrl: './classroom-profile.page.html',
  styleUrls: ['./classroom-profile.page.scss'],
})
export class ClassroomProfilePage implements OnInit {

  public parentChats = [];

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor() { }

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
    const studentSet = new Set();
    DummyService.school.classes.forEach(classroom => {
      classroom.students.forEach(student => {
        studentSet.add(student.name);
      });
    });
    return studentSet.size;
  }

  getTotalPosts() {
    GeordieService.()
    return 'XX'
  }

  ngOnInit() {
    this.parentChats = [
      {
        name: 'Hengy Setiawan',
        phoneNum: '+12345'
      },
      {
        name: 'Lidia Gunawan',
        phoneNum: '+12345'
      },
      {
        name: 'Bianca Kurniawan',
        phoneNum: '+12345'
      }
    ];
  }

}
