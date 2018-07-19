Feature: Amazon Login Page

#without examples keyword

#Scenario: Amazon Login Page Test Scenario
#
#Given User is already on Amazon Home Page
#When title of page is Amazon
#Then user hovers on signin
#When title of page is signinemailid
#Then user enters emailid as "ashsne6@gmail.com"
#And user clicks on continue
#Then user enters password as "mybestbuddy"
#And user clicks on signinbutton
#Then user is on his account

#with examples keyword

Scenario Outline: Amazon Login Page Test Scenario

Given User is already on Amazon Home Page
When title of page is Amazon
Then user hovers on signin
When title of page is signinemailid
Then user enters emailid as "<emailid>"
And user clicks on continue
Then user enters password as "<password>"
And user clicks on signinbutton
Then user is on his account

Examples:
  | emailid                 | password   |
  | ashsne6@gmail.com       | mybestbuddy|
  | sneh5@gmail.com | rock123   |