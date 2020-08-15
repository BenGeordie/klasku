import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {GeordieService} from '../services/geordie.service';

import { teacher } from '../../Utilities/dummyInfo.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  photos = this.photoService.photos;

  constructor(public photoService: PhotoService,
    public geordieService: GeordieService) {}

}
