import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveRoutesLinkPage } from './active-routes-link.page';

describe('ActiveRoutesLinkPage', () => {
  let component: ActiveRoutesLinkPage;
  let fixture: ComponentFixture<ActiveRoutesLinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRoutesLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
