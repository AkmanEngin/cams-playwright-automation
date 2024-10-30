@regression   
Feature: Homepage Test

  Background:
    Given user is on the home page

  @home
  Scenario: Verify page is opened
    Then user should be able to see title "ISO New England"

 @search
  Scenario Outline: Searching in the main page
  Given user enters "<search_term>" into the search bar
  When user clicks on the search button
  Then user should see "<search_term>" in the top 3 results

  Examples:
    | search_term |
    | grid        |
    | keynote     |