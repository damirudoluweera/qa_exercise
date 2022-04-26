/// <reference types="cypress"/>
import { Given, Then, And, When } from'cypress-cucumber-preprocessor/steps'
import {go_to_forgotpassword_element}  from '../../../_userActions/GoToElementPage'
import {validate_forgot_password_header}  from '../../../_userActions/HeaderValidation'
import {enter_email,click_retrieve_password,server_error_validation}  from '../../../_userActions/ForgotPasswordElements'




Given('user click the forget password example',() => {
    go_to_forgotpassword_element()

    })


And('user validate the forget password element name',() => {
    validate_forgot_password_header("Forgot Password")

    })


Then('user enter the email',() => {
    enter_email("test123@gmail.com")

    })


Then('user click the retrieve password button',() => {
    click_retrieve_password()

    })


Then('user recieves a internal server error',() => {
    server_error_validation("Internal Server Error")

    })




