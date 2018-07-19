$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sneha/eclipse-workspace/CucumberBddProj/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Login Page",
  "description": "",
  "id": "amazon-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without examples keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Amazon Login Page Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given User is already on Amazon Home Page"
    },
    {
      "line": 8,
      "value": "#When title of page is Amazon"
    },
    {
      "line": 9,
      "value": "#Then user hovers on signin"
    },
    {
      "line": 10,
      "value": "#When title of page is signinemailid"
    },
    {
      "line": 11,
      "value": "#Then user enters emailid as \"ashsne6@gmail.com\""
    },
    {
      "line": 12,
      "value": "#And user clicks on continue"
    },
    {
      "line": 13,
      "value": "#Then user enters password as \"mybestbuddy\""
    },
    {
      "line": 14,
      "value": "#And user clicks on signinbutton"
    },
    {
      "line": 15,
      "value": "#Then user is on his account"
    },
    {
      "line": 17,
      "value": "#with examples keyword"
    }
  ],
  "line": 19,
  "name": "Amazon Login Page Test Scenario",
  "description": "",
  "id": "amazon-login-page;amazon-login-page-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is already on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of page is Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user hovers on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "title of page is signinemailid",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters emailid as \"\u003cemailid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on signinbutton",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user is on his account",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "amazon-login-page;amazon-login-page-test-scenario;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 32,
      "id": "amazon-login-page;amazon-login-page-test-scenario;;1"
    },
    {
      "cells": [
        "ashsne6@gmail.com",
        "mybestbuddy"
      ],
      "line": 33,
      "id": "amazon-login-page;amazon-login-page-test-scenario;;2"
    },
    {
      "cells": [
        "snehaashwin15@gmail.com",
        "Ashsne15"
      ],
      "line": 34,
      "id": "amazon-login-page;amazon-login-page-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Amazon Login Page Test Scenario",
  "description": "",
  "id": "amazon-login-page;amazon-login-page-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is already on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of page is Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user hovers on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "title of page is signinemailid",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters emailid as \"ashsne6@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters password as \"mybestbuddy\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on signinbutton",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user is on his account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.User_is_already_on_Amazon_Home_Page()"
});
formatter.result({
  "duration": 8110244509,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_Amazon()"
});
formatter.result({
  "duration": 21916821,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_hovers_on_signin()"
});
formatter.result({
  "duration": 924356021,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_signinemailid()"
});
formatter.result({
  "duration": 15677821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashsne6@gmail.com",
      "offset": 24
    }
  ],
  "location": "LoginStepDef.user_enters_emailid_as(String)"
});
formatter.result({
  "duration": 138556061,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_continue()"
});
formatter.result({
  "duration": 532891965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mybestbuddy",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_password_as(String)"
});
formatter.result({
  "duration": 103059975,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signinbutton()"
});
formatter.result({
  "duration": 3136274109,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_his_account()"
});
formatter.result({
  "duration": 627119529,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Amazon Login Page Test Scenario",
  "description": "",
  "id": "amazon-login-page;amazon-login-page-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is already on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of page is Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user hovers on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "title of page is signinemailid",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters emailid as \"snehaashwin15@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters password as \"Ashsne15\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on signinbutton",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user is on his account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.User_is_already_on_Amazon_Home_Page()"
});
formatter.result({
  "duration": 6536330065,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_Amazon()"
});
formatter.result({
  "duration": 16113328,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_hovers_on_signin()"
});
formatter.result({
  "duration": 2870534711,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_signinemailid()"
});
formatter.result({
  "duration": 29647078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "snehaashwin15@gmail.com",
      "offset": 24
    }
  ],
  "location": "LoginStepDef.user_enters_emailid_as(String)"
});
formatter.result({
  "duration": 184193758,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_continue()"
});
formatter.result({
  "duration": 608829556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ashsne15",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_password_as(String)"
});
formatter.result({
  "duration": 102007796,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signinbutton()"
});
formatter.result({
  "duration": 886041630,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_his_account()"
});
formatter.result({
  "duration": 5954314,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cAmazon[.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more]\u003e but was:\u003cAmazon[ Sign In]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.LoginStepDef.user_is_on_his_account(LoginStepDef.java:80)\r\n\tat ✽.Then user is on his account(C:/Users/sneha/eclipse-workspace/CucumberBddProj/src/main/java/Features/login.feature:29)\r\n",
  "status": "failed"
});
});