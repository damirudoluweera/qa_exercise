/// <reference types="cypress" />
import forgot_password_elements, {} from "../_pageEliments/_forgot_password/forgotpassword"


export const enter_email = (e_mail) => {
    forgot_password_elements("email").type(e_mail)

}

export const click_retrieve_password = () => {
    forgot_password_elements("retrieve_password").click().wait(1000)

}

export const server_error_validation = (error) => {
    forgot_password_elements("server_error_message").invoke('text').should('equal',error)

}