import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss'],
})
export class AnalyticsCardComponent implements OnInit {
  @Input() title: string;
  @Input() sentimentScore: string;
  @Input() engagementScore: string;
  @Input() averageMessages: string;

  constructor() { }

  ngOnInit() {}

}
