/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
import Modernizr from 'Modernizr';

import modElem from 'modElem';
Modernizr.addTest('cssexunit', function() {
  var elemStyle = modElem.elem.style;
  var supports;
  try {
    elemStyle.fontSize = '3ex';
    supports = elemStyle.fontSize.indexOf('ex') !== -1;
  } catch (e) {
    supports = false;
  }
  return supports;
});