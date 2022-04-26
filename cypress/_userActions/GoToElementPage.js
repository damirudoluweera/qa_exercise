/// <reference types="cypress" />
import checkboxes_elements, {} from "../_pageEliments/_checkboxes/checkboxes"
import dropdown_elements, {} from "../_pageEliments/_dropdown/dropdown"
import forgot_password_elements, {} from "../_pageEliments/_forgot_password/forgotpassword"
import input_elements, {} from "../_pageEliments/_inputs/inputs"
import add_remove_elements, {} from "../_pageEliments/_add_remove_elements/addremoveelements"


export const go_to_checkboxes_element = () => {
    checkboxes_elements("checkboxes_element").click().wait(2000)

}

export const go_to_dropdown_element = () => {
    dropdown_elements("dropdown_element").click().wait(2000)

}

export const go_to_forgotpassword_element = () => {
    forgot_password_elements("forgot_password_element").click().wait(2000)

}

export const go_to_input_element = () => {
    input_elements("input_element").click().wait(2000)

}

export const go_to_add_remove_elements = () => {
    add_remove_elements("add_remove_element").click().wait(2000)

}