/// <reference types="cypress"/>
import { Given, Then, And, When } from'cypress-cucumber-preprocessor/steps'
import {go_to_input_element}  from '../../../_userActions/GoToElementPage'
import {validate_input_header}  from '../../../_userActions/HeaderValidation'
import {input_type_validation,input_number}  from '../../../_userActions/InputElements'



Given('user click the input elements example',() => {
    go_to_input_element()

    })


And('user validate the input element name',() => {
    validate_input_header("Inputs")

    })


Then('user validate the input type',() => {
    input_type_validation("Number")

    })


Then('user input a number',() => {
    input_number(6)

    })