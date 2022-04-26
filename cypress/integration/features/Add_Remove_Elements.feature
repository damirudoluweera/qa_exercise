Feature: Add/Remove Elements

Background: 
    Given user navigate to the website

Scenario: Add/Remove Element Validation
    Given user click the add remove elements example
    And user validate the add remove element name 
    When user click the "Add Element" button
    Then a delete button appers 
    Then user click the delete button
    Then the delete button disappears 
