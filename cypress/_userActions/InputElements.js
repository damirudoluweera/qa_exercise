/// <reference types="cypress" />
import input_elements, {} from "../_pageEliments/_inputs/inputs"

export const input_type_validation = (input_type) => {
    input_elements("input_type").invoke('text').should('equal',input_type)

}

export const input_number = (number) => {
    input_elements("enter_number").type(number)

}