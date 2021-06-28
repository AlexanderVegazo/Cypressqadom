import { allElementsTest } from '../element-data/elements-test-data';

export function searchLaptop(exists) {
    if(exists) {
        cy.get(allElementsTest.searchBar.selector)
          .type(allElementsTest.searchBar.inputText2);
    } else {
        cy.get(allElementsTest.searchBar.selector)
          .type(allElementsTest.searchBar.inputText);
    }

    cy.get(allElementsTest.searchButton.selector)
      .click();
}

export function checkSearchResults(status) {
    cy.get(allElementsTest.headerResult.selector)
      .contains(allElementsTest.headerResult.text)
    if (status) {
        cy.contains(allElementsTest.textProductResults.textProduct)
          .should('be.visible');
    } else {
        cy.get(allElementsTest.textSearchResults.selector)
          .contains(allElementsTest.textSearchResults.textNoResults);
    }
}

export function goToDashboard() {
    cy.get(allElementsTest.dashboardButton.selector)
      .click();

    cy.get(allElementsTest.dashboardHeader.selector)
      .contains(allElementsTest.dashboardHeader.text);
}