import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminClassroomPage } from './admin-classroom.page';

describe('AdminClassroomPage', () => {
  let component: AdminClassroomPage;
  let fixture: ComponentFixture<AdminClassroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
