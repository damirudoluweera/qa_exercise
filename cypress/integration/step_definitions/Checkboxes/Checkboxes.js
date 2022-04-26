 /// <reference types="cypress"/>
import { Given, Then, And, When } from'cypress-cucumber-preprocessor/steps'
import {go_to_checkboxes_element}  from '../../../_userActions/GoToElementPage'
import {validate_checkboxes_header}  from '../../../_userActions/HeaderValidation'
import {check_checkbox1,uncheck_checkbox1}  from '../../../_userActions/CheckboxElements'



Given('user click the checkboxes example',() => {
    go_to_checkboxes_element()

    })
 

And('user validate the checkbox element name',() => {
    validate_checkboxes_header("Checkboxes")

    })


Then('user check the checkbox1',() => {
    check_checkbox1()

    })


Then('user uncheck the checkbox1',() => {
    uncheck_checkbox1()

    })

