import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommitsPage } from './commits.page';

describe('CommitsPage', () => {
  let component: CommitsPage;
  let fixture: ComponentFixture<CommitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
