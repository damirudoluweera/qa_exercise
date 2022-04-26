
const checkboxes_elements = (element_name) => {
    switch (element_name) {
        case "checkboxes_element":

            return cy.get("#content > ul > li:nth-child(6) > a")

            break;


        case "element_name": 

            return cy.get("#content > div > h3")

            break;


        case "checkbox":

            return cy.get("#checkboxes > input[type=checkbox]:nth-child(1)")

            break;
    

            
        default:
            return null
            break;
    }
}



export default checkboxes_elements