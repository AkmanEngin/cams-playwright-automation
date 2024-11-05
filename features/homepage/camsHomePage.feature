Feature: CAMS Homepage Test


  @camshome
  Scenario: Verify CAMS page is opened
      Given user is on CAMS home page
      Then user should be able to see title "Customer and Asset Management System"