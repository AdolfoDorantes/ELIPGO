import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FetchDataComponent, WeatherForecast } from './fetch-data.component';

describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let weatherForecast: WeatherForecast[];

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      declarations: [FetchDataComponent],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
    httpClientSpy.get.and.returnValue(of(weatherForecast));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
