import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassroomProfilePage } from './classroom-profile.page';

describe('ClassroomProfilePage', () => {
  let component: ClassroomProfilePage;
  let fixture: ComponentFixture<ClassroomProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassroomProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
