/*!
{
  "name": "progress Element",
  "caniuse": "progress",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
/*!
{
  "name": "progress Element",
  "caniuse": "progress",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
import Modernizr from 'Modernizr';

import createElement from 'createElement';
// Tests for progressbar-support. All browsers that don't support progressbar returns undefined =)
Modernizr.addTest('progressbar', createElement('progress').max !== undefined);

// Tests for meter-support. All browsers that don't support meters returns undefined =)
Modernizr.addTest('meter', createElement('meter').max !== undefined);