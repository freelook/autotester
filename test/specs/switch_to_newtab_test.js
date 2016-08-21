/**
 * Attaching to extensions api requires these two flag to be set:
 *
 * --silent-debugger-extension-api
 * --extensions-on-chrome-urls
 *
 * About warning: https://bugs.chromium.org/p/chromium/issues/detail?id=475151
 */

'use strict';

var webdriver = require('selenium-webdriver');
var assert = require('selenium-webdriver/testing/assert');
var test = require('selenium-webdriver/lib/test');

test.suite(function (env) {
  var driver;

  test.before(function () {
    driver = env.builder().build();
  });

  test.after(function () {
    driver.quit();
  });

  describe('switchTo', function() {

    test.it('should switch to new tab', function () {
      driver.switchTo().newTab(test.Pages.simpleTestPage);
      assert(driver.getCurrentUrl()).equalTo(test.Pages.simpleTestPage);
    });

    test.it('should switch to about:blank if no url provided', function () {
      driver.switchTo().newTab();
      assert(driver.getCurrentUrl()).equalTo('about:blank');
    });

  })

});