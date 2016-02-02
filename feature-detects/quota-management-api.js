/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/quota-api/"
  }]
}
!*/
/* DOC
Detects the ability to request a specific amount of space for filesystem access
*/
/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/quota-api/"
  }]
}
!*/
/* DOC
Detects the ability to request a specific amount of space for filesystem access
*/
/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/quota-api/"
  }]
}
!*/
/* DOC
Detects the ability to request a specific amount of space for filesystem access
*/
/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/quota-api/"
  }]
}
!*/
/* DOC
Detects the ability to request a specific amount of space for filesystem access
*/
import Modernizr from 'Modernizr';

import prefixed from 'prefixed';
Modernizr.addTest('quotamanagement', function() {
  var tempStorage = prefixed('temporaryStorage', navigator);
  var persStorage = prefixed('persistentStorage', navigator);

  return !!(tempStorage && persStorage);
});