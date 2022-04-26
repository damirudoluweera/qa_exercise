/// <reference types="cypress" />
import checkboxes_elements, {} from "../_pageEliments/_checkboxes/checkboxes"


export const check_checkbox1 = () => {
    checkboxes_elements("checkbox").check().wait(1000).should('be.checked')

}


export const uncheck_checkbox1 = () => {
    checkboxes_elements("checkbox").uncheck().wait(1000).should('not.be.checked')

}