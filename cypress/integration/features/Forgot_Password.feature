Feature: Forget Password Element

Background:
    Given user navigate to the website

Scenario: Forget Password Element Validation
    Given user click the forget password example
    And user validate the forget password element name
    Then user enter the email
    Then user click the retrieve password button
    Then user recieves a internal server error 