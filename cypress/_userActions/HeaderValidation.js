/// <reference types="cypress" />
import checkboxes_elements, {} from "../_pageEliments/_checkboxes/checkboxes"
import dropdown_elements, {} from "../_pageEliments/_dropdown/dropdown"
import forgot_password_elements, {} from "../_pageEliments/_forgot_password/forgotpassword"
import input_elements, {} from "../_pageEliments/_inputs/inputs"
import add_remove_elements, {} from "../_pageEliments/_add_remove_elements/addremoveelements"


export const validate_checkboxes_header = (header) => {
    checkboxes_elements("element_name").invoke('text').should('equal',header).wait(1000)

}

export const validate_dropdown_header = (header) => {
    dropdown_elements("element_name").invoke('text').should('equal',header).wait(1000)

}

export const validate_forgot_password_header = (header) => {
    forgot_password_elements("element_name").invoke('text').should('equal',header).wait(1000)

}

export const validate_add_remove_elements_header = (header) => {
    add_remove_elements("element_name").invoke('text').should('equal',header).wait(1000)

}

export const validate_input_header = (header) => {
    input_elements("element_name").invoke('text').should('equal',header).wait(1000)

}