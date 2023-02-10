/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

let name = faker.name.firstName();
let last = faker.name.lastName();
let email = faker.internet.email();
let pw = faker.internet.password();
let compagny = faker.company.companyName();
let address = faker.address.streetAddress();
let city = faker.address.city();
let zipcode = faker.address.zipCode();
let phone = faker.phone.phoneNumber();

beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
});

describe("parcours utilisateur shopping", () => {
    it.skip("insciption", () => {
        cy.get(".panel > .header > :nth-child(3) > a").click();
        cy.get("#firstname").type(name);
        cy.get("#lastname").type(last);
        cy.get("#email_address").type(email);
        cy.get("#password").type(pw);
        cy.get("#password-confirmation").type(pw);
        cy.get(
            "#form-validate > .actions-toolbar > div.primary > .action > span"
        ).click();
    });
    it.skip("connexion", () => {
        cy.get(".panel > .header > .authorization-link > a").click();
        cy.get("#email").type("d.vador@yopmail.com");
        cy.get(
            ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
        ).type("Palpatine666");
        cy.get(
            ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
        ).click();
    });

    it.skip("ajouter panier", () => {
        cy.get("#ui-id-4").trigger("mouseover");
        cy.get("#ui-id-9").trigger("mouseover");
        cy.get("#ui-id-11 > span").click();
        cy.get(".wrapper > .products > :nth-child(1)").trigger("mouseover");
        cy.get(
            ".swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-167"
        ).click();
        cy.get(
            ".swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49"
        ).click();
        cy.get('[class="action tocart primary"]')
            .first()
            .click({ force: true });
        cy.wait(3000);
        cy.get(".showcart").click();
        cy.wait(3000);
        cy.get("#top-cart-btn-checkout").click();
        cy.wait(2000);
        cy.get("#customer-email-fieldset > .required").type(email);
        cy.get('[name="shippingAddress.firstname"]').type(name);
        cy.get('[name="shippingAddress.lastname"]').type(last);
        cy.get('[name="shippingAddress.company"]').type(compagny);
        cy.get('[name="shippingAddress.street.0"]').type(address);
        cy.get('[name="shippingAddress.city"]').type(city);
        cy.get('[class="select"]').eq(0).select("Alaska");
        cy.get('[name="shippingAddress.postcode"]').type(zipcode);
        cy.get('[class="select"]').eq(1).select("France");
        cy.get('[name="shippingAddress.telephone"]').type(phone);
        cy.get(":nth-child(2) > :nth-child(1) > .radio").click();
        cy.get(".button").click();
        cy.get("#billing-address-same-as-shipping-checkmo").click();
        cy.get(
            ".payment-method-content > :nth-child(4) > div.primary > .action"
        ).click();
        cy.get(
            ".checkout-success > .actions-toolbar > div.primary > .action"
        ).click();
    });
    it("modifier la quantite panier", () => {
        cy.get("#ui-id-4").trigger("mouseover");
        cy.get("#ui-id-9").trigger("mouseover");
        cy.get("#ui-id-11 > span").click();
        cy.get(".wrapper > .products > :nth-child(1)").trigger("mouseover");
        cy.get(
            ".swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-167"
        ).click();
        cy.get(
            ".swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49"
        ).click();
        cy.get('[class="action tocart primary"]')
            .first()
            .click({ force: true });
        cy.wait(3000);
        cy.get(".showcart").click();
        cy.wait(3000);
        cy.get(":nth-child(7) > .secondary > .action > span").click();

        cy.get('input[class="input-text qty"]').clear().type("20");
        cy.get(".update > span").click();
        cy.wait(1000);
        cy.get(
            ".checkout-methods-items > :nth-child(1) > .action > span"
        ).click();
        cy.wait(1000);
        cy.get("#customer-email-fieldset > .required").type(email);
        cy.get('[name="shippingAddress.firstname"]').type(name);
        cy.get('[name="shippingAddress.lastname"]').type(last);
        cy.get('[name="shippingAddress.company"]').type(compagny);
        cy.get('[name="shippingAddress.street.0"]').type(address);
        cy.get('[name="shippingAddress.city"]').type(city);
        cy.get('[class="select"]').eq(0).select("Alaska");
        cy.get('[name="shippingAddress.postcode"]').type(zipcode);
        cy.get('[class="select"]').eq(1).select("France");
        cy.get('[name="shippingAddress.telephone"]').type(phone);
        cy.get(":nth-child(2) > :nth-child(1) > .radio").click();
        cy.get(".button").click();
        cy.get("#billing-address-same-as-shipping-checkmo").click();
        cy.get(
            ".payment-method-content > :nth-child(4) > div.primary > .action"
        ).click();
    });
    it("mise a jour adresse livraison", () => {
        cy.get("#ui-id-4").trigger("mouseover");
        cy.get("#ui-id-9").trigger("mouseover");
        cy.get("#ui-id-11 > span").click();
        cy.get(".wrapper > .products > :nth-child(1)").trigger("mouseover");
        cy.get(
            ".swatch-opt-1396 > .size > .swatch-attribute-options > #option-label-size-143-item-167"
        ).click();
        cy.get(
            ".swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49"
        ).click();
        cy.get('[class="action tocart primary"]')
            .first()
            .click({ force: true });
        cy.wait(2000);
        cy.get(".showcart").click();
        cy.wait(2000);
        cy.get(":nth-child(7) > .secondary > .action > span").click();
        cy.get(".update > span").click();
        cy.wait(2000);
        cy.get(
            ".checkout-methods-items > :nth-child(1) > .action > span"
        ).click();
        cy.get("#customer-email-fieldset > .required").type(email);
        cy.get('[name="shippingAddress.firstname"]').type(name);
        cy.get('[name="shippingAddress.lastname"]').type(last);
        cy.get('[name="shippingAddress.company"]').type(compagny);
        cy.get('[name="shippingAddress.street.0"]').type(address);
        cy.get('[name="shippingAddress.city"]').type(city);
        // cy.get('[class="select"]').eq(0).select("Alaska");
        cy.get('[name="shippingAddress.region_id"]')
            .find('select[class="select"]')
            .select("Alaska");
        cy.get('[name="shippingAddress.postcode"]').type(zipcode);

        cy.get('[name="shippingAddress.country_id"]')
            .find('select[class="select"]')
            .select("France");
        // cy.get('[class="select"]').eq(1).select("France");
        cy.get('[name="shippingAddress.telephone"]').type(phone);
        cy.get(":nth-child(2) > :nth-child(1) > .radio").click();
        cy.get(".button").click();
        cy.get("#billing-address-same-as-shipping-checkmo").click();
        cy.get("#billing-address-same-as-shipping-checkmo").click();
        cy.wait(1000);
        cy.get('[name="billingAddresscheckmo.firstname"]').type(name);
        cy.get('[name="billingAddresscheckmo.lastname"]').type(last);
        cy.get('[name="billingAddresscheckmo.company"]').type(compagny);
        cy.get('[name="billingAddresscheckmo.street.0"]').type(address);
        cy.get('[name="billingAddresscheckmo.city"]').type(city);
        cy.get('[name="billingAddresscheckmo.region_id"]')
            .find('select[class="select"]')
            .select("Alaska");
        cy.get('[name="billingAddresscheckmo.postcode"]').type(zipcode);
        cy.get('[name="billingAddresscheckmo.country_id"]')
            .find('select[class="select"]')
            .select("France");
        cy.get('[name="billingAddresscheckmo.telephone"]').type(phone);
        cy.get(".action-update").click();
    });
});
