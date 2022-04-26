
const add_remove_elements = (element_name) => {
    switch (element_name) {
        case "add_remove_element":

            return cy.get("#content > ul > li:nth-child(2) > a")

            break;


        case "element_name":

            return cy.get("#content > h3")

            break;


        case "add_element_button":

            return cy.get("#content > div > button")

            break;


        case "delete_button":

            return cy.get("#elements > button")

            break;

    

            
        default:
            return null
            break;
    }
}

export default add_remove_elements