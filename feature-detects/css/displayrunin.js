/*!
{
  "name": "CSS Display run-in",
  "property": "display-runin",
  "authors": ["alanhogan"],
  "tags": ["css"],
  "builderAliases": ["css_displayrunin"],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "http://css-tricks.com/596-run-in/"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/198"
  }]
}
!*/
/*!
{
  "name": "CSS Display run-in",
  "property": "display-runin",
  "authors": ["alanhogan"],
  "tags": ["css"],
  "builderAliases": ["css_displayrunin"],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "http://css-tricks.com/596-run-in/"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/198"
  }]
}
!*/
import Modernizr from 'Modernizr';

import testAllProps from 'testAllProps';
Modernizr.addTest('displayrunin', testAllProps('display', 'run-in'),
  {aliases: ['display-runin']});