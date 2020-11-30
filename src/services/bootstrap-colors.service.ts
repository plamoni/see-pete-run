import {Injectable} from '@angular/core';

/**
 * Service providing bootstrap colors.
 */
@Injectable({
  providedIn: 'root',
})
export class BootstrapColorsService {
  readonly blue = colorForName('blue');
  readonly cyan = colorForName('cyan');
  readonly danger = colorForName('danger');
  readonly dark = colorForName('dark');
  readonly gray = colorForName('gray');
  readonly grayDark = colorForName('gray-dark');
  readonly green = colorForName('green');
  readonly indigo = colorForName('indigo');
  readonly info = colorForName('info');
  readonly light = colorForName('light');
  readonly orange = colorForName('orange');
  readonly pink = colorForName('pink');
  readonly primary = colorForName('primary');
  readonly purple = colorForName('purple');
  readonly red = colorForName('red');
  readonly secondary = colorForName('secondary');
  readonly success = colorForName('success');
  readonly teal = colorForName('teal');
  readonly warning = colorForName('warning');
  readonly white = colorForName('white');
  readonly yellow = colorForName('yellow');
}

/**
 * Get CSS variable value for name (dashes added automatically).
 */
function colorForName(name: string): string {
  return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${name}`)
      .trim();
}
