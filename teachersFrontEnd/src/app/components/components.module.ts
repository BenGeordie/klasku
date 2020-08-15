import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WithPictureComponent } from './with-picture/with-picture.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [WithPictureComponent],
    exports: [WithPictureComponent]
})
export class ComponentsModule {}
