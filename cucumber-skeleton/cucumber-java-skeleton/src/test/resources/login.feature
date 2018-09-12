Feature: AutoLogin Feature

  Scenario: AutoLogin Test Scenario
    Given User is on login page
    When Title of login page is AutoLogin
    Then User Enters username and password
    Then User clicks on login button
    Then User logged in successfully