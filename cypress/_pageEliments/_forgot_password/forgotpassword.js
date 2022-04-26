
const forgot_password_elements = (element_name) => {
    switch (element_name) {
        case "forgot_password_element":

            return cy.get("#content > ul > li:nth-child(20) > a")

            break;


        case "element_name":

            return cy.get("#content > div > h2")

            break;


        case "email":

            return cy.get("#email")

            break;


        case "retrieve_password":

            return cy.get("#form_submit")

            break;


        case "server_error_message":

            return cy.get("body > h1")

            break;
    

            
        default:
            return null
            break;
    }
}

export default forgot_password_elements