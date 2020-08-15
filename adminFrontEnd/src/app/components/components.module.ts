import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WithPictureComponent } from './with-picture/with-picture.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [WithPictureComponent, ContactListComponent, AnalyticsCardComponent],
    exports: [WithPictureComponent, ContactListComponent, AnalyticsCardComponent]
})
export class ComponentsModule {}
