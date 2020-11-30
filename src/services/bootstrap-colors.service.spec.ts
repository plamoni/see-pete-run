import {TestBed} from '@angular/core/testing';
import validateColor from 'validate-color';
import {BootstrapColorsService} from './bootstrap-colors.service';


describe('BootstrapColorsService', () => {
  let service: BootstrapColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootstrapColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have all the values populated with colors', () => {
    const entries = Object.entries(service);

    expect(entries.length).toBeGreaterThan(0);

    for (const [key, value] of entries) {
      expect(value)
          .withContext(`${key} => '${value}'`)
          .not.toBeUndefined();
    }
  });

  it('should have only valid colors', () => {
    const entries = Object.entries(service);

    expect(entries.length).toBeGreaterThan(0);

    for (const [key, value] of entries) {
      expect(validateColor(value))
          .withContext(`${key} => '${value}'`)
          .toBeTrue();
    }
  });
});
