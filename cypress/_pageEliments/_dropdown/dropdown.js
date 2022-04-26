
const dropdown_elements = (element_name) => {
    switch (element_name) {
        case "dropdown_element":

            return cy.get("#content > ul > li:nth-child(11) > a")

            break;


        case "element_name":

            return cy.get("#content > div > h3")

            break;


        case "dropdown":

            return cy.get("#dropdown")

            break;
    

            
        default:
            return null
            break;
    }
}



export default dropdown_elements