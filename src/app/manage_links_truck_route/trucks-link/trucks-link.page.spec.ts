import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrucksLinkPage } from './trucks-link.page';

describe('TrucksLinkPage', () => {
  let component: TrucksLinkPage;
  let fixture: ComponentFixture<TrucksLinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
