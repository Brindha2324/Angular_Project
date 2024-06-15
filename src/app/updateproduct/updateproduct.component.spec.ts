import { UserService } from './../services/user.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UpdateproductComponent } from './updateproduct.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';


describe('UpdateproductComponent', () => {
  let component: UpdateproductComponent;
  let fixture: ComponentFixture<UpdateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [UpdateproductComponent],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases here...
});
