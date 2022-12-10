import { select } from 'd3-selection';

/**
 * @jest-environment jsdom
 */

import CalHeatmap from '../../src/CalHeatmap';

[
  [10, 10],
  [20, 30],
].forEach((size) => {
  describe(`on subdomain size = ${size}`, () => {
    beforeEach(() => {
      const cal = new CalHeatmap();
      select('body').append('div').attr('id', 'cal-heatmap');

      cal.init({
        range: 2,
        domain: { type: 'year' },
        subDomain: {
          type: 'month',
          gutter: 0,
          width: size[0],
          height: size[1],
        },
        label: {
          height: 20,
        },
      });
    });

    afterEach(() => {
      document.getElementsByTagName('html')[0].innerHTML = '';
    });

    it('renders the given subdomain width and height', () => {
      const selection = select('#cal-heatmap').selectAll('.graph-rect');

      // eslint-disable-next-line no-restricted-syntax
      for (const elem of selection) {
        expect(select(elem).attr('width')).toBe(`${size[0]}`);
        expect(select(elem).attr('height')).toBe(`${size[1]}`);
      }
    });

    it('changes the domain dimensions', () => {
      const selection = select('#cal-heatmap').selectAll('.domain-background');
      // eslint-disable-next-line no-restricted-syntax
      for (const elem of selection) {
        expect(select(elem).attr('width')).toBe(`${size[0] * 12}`);
        expect(select(elem).attr('height')).toBe(`${size[1] + 20}`);
      }
      expect(select('.graph-domain:nth-child(1)').attr('height')).toBe(
        `${size[1] + 20}`,
      );
      expect(select('.graph-domain:nth-child(1)').attr('width')).toBe(
        `${size[0] * 12}`,
      );
    });
  });
});