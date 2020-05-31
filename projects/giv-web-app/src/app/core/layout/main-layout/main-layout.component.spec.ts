import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;
  let template: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      declarations: [MainLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar', () => {
    expect(template.querySelectorAll('[data-test="nav"]').length).toBe(1);
  });

  it('should have a main element', () => {
    expect(template.querySelectorAll('[data-test="main"]').length).toBe(1);
  });

  it('should have a footer', () => {
    expect(template.querySelectorAll('[data-test="footer"]').length).toBe(1);
  });
});
