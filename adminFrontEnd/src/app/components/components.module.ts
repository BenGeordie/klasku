import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WithPictureComponent } from './with-picture/with-picture.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [WithPictureComponent, ContactListComponent],
    exports: [WithPictureComponent, ContactListComponent]
})
export class ComponentsModule {}
