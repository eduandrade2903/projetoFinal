import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email', () => {
    const form = component.createForm();
    form.setValue({
      "usuario" : "usuarioinvalido",
      "senha" : '@Eduandrade001',

    });
    expect(form.valid).toBeFalse();
  });

  it('should validate password', () => {
    const form = component.createForm();
    form.setValue({
      "usuario" : "email@email",
      "senha" : '123456',
    });
    expect(form.valid).toBeFalse();
  })
});
