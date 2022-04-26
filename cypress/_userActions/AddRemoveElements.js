/// <reference types="cypress" />
import add_remove_elements, {} from "../_pageEliments/_add_remove_elements/addremoveelements"


export const click_add_element_button = () => {
    add_remove_elements("add_element_button").click().wait(1000)

}


export const delete_button_visible = () => {
    add_remove_elements("delete_button").should('be.visible').wait(1000)

}


export const click_delete_button = () => {
    add_remove_elements("delete_button").click()

}


export const delete_button_not_visible = () => {
    add_remove_elements("delete_button").should('not.exist')

}




