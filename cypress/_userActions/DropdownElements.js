/// <reference types="cypress" />
import dropdown_elements, {} from "../_pageEliments/_dropdown/dropdown"


export const select_option1 = () => {
    dropdown_elements("dropdown").select('Option 1').wait(1000).should('have.value', '1')

}


export const select_option2 = () => {
    dropdown_elements("dropdown").select('Option 2').wait(1000).should('have.value', '2')


}