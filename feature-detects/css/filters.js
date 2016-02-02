/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
import Modernizr from 'Modernizr';

import createElement from 'createElement';
import prefixes from 'prefixes';
import testAllProps from 'testAllProps';
import 'test/css/supports';
Modernizr.addTest('cssfilters', function() {
  if (Modernizr.supports) {
    return testAllProps('filter', 'blur(2px)');
  } else {
    var el = createElement('a');
    el.style.cssText = prefixes.join('filter:blur(2px); ');
    // https://github.com/Modernizr/Modernizr/issues/615
    // documentMode is needed for false positives in oldIE, please see issue above
    return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
  }
});