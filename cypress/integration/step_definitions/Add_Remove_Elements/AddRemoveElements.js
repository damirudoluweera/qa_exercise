/// <reference types="cypress"/>
import { Given, Then, And, When } from'cypress-cucumber-preprocessor/steps'
import {go_to_add_remove_elements}  from '../../../_userActions/GoToElementPage'
import {validate_add_remove_elements_header}  from '../../../_userActions/HeaderValidation'
import {click_add_element_button,delete_button_visible,click_delete_button,delete_button_not_visible}  from '../../../_userActions/AddRemoveElements'



Given('user navigate to the website',() => {
    cy.viewport("macbook-16")
    cy.visit("https://the-internet.herokuapp.com/")     
    
    })


Given('user click the add remove elements example',() => {
    go_to_add_remove_elements()

    })


And('user validate the add remove element name',() => {
    validate_add_remove_elements_header("Add/Remove Elements")

    })


When('user click the "Add Element" button',() => {
    click_add_element_button()

    })


Then('a delete button appers',() => {
    delete_button_visible()

    })


Then('user click the delete button',() => {
    click_delete_button()

    })


Then('the delete button disappears',() => {
    delete_button_not_visible()

    })












