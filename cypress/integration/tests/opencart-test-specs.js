/// <reference types="cypress" />
import { searchLaptop, checkSearchResults, goToDashboard, } from '../actions/opencart-actions';

context('Opencart Tests', () => {

    it('Go to OpenCart website', () => {
        cy.visit(Cypress.env('url'));
    })

    it('Search a product that do not exist', () => {
        searchLaptop(false);
        checkSearchResults(false);
    })

    it('Return to Dashboard', () => {
        goToDashboard();
    })

    it('Search a product that do exist', () => {
        searchLaptop(true);
        checkSearchResults(true);
    })

})