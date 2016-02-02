/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
import Modernizr from 'Modernizr';

import 'testStyles';
import 'test/css/animations';
Modernizr.addTest('csspseudoanimations', function() {
  var result = false;

  if (!Modernizr.cssanimations || !window.getComputedStyle) {
    return result;
  }

  var styles = [
    '@', Modernizr._prefixes.join('keyframes csspseudoanimations { from { font-size: 10px; } }@').replace(/\@$/, ''),
    '#modernizr:before { content:" "; font-size:5px;',
    Modernizr._prefixes.join('animation:csspseudoanimations 1ms infinite;'),
    '}'
  ].join('');

  Modernizr.testStyles(styles, function(elem) {
    result = window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '10px';
  });

  return result;
});