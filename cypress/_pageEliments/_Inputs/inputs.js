
const input_elements = (element_name) => {
    switch (element_name) {
        case "input_element":

            return cy.get("#content > ul > li:nth-child(27) > a")

            break;


        case "element_name":

            return cy.get("#content > div > div > h3")

            break;


        case "input_type":

            return cy.get("#content > div > div > div > p")

            break;


        case "enter_number":

            return cy.get("#content > div > div > div > input[type=number]")

            break;

    

            
        default:
            return null
            break;
    }
}

export default input_elements