/// <reference types="cypress"/>
import { Given, Then, And, When } from'cypress-cucumber-preprocessor/steps'
import {go_to_dropdown_element}  from '../../../_userActions/GoToElementPage'
import {validate_dropdown_header}  from '../../../_userActions/HeaderValidation'
import {select_option1,select_option2}  from '../../../_userActions/DropdownElements'



Given('user click the dropdown example',() => {
    go_to_dropdown_element()

    })


And('user validate the dropdown element name',() => {
    validate_dropdown_header("Dropdown List")

    })


Then('user select the option 1 from the dropdown',() => {
    select_option1()

    })

    
Then('user select the option 2 from the dropdown',() => {
    select_option2()

    })