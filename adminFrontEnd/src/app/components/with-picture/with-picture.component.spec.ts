import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WithPictureComponent } from './with-picture.component';

describe('WithPictureComponent', () => {
  let component: WithPictureComponent;
  let fixture: ComponentFixture<WithPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithPictureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WithPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
