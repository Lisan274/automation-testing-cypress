describe('Flujo de compra en SauceDemo', () => {
  beforeEach(() => {
    // Visitar la página de inicio de sesión
    cy.fixture("saucedemo-data").as("data");
  });

  it("Autenticar al usuario, agregar productos al carrito y completar la compra de manera exitosa", function () {
    cy.visit("/");

    // Ingresar las credenciales y hacer clic en el botón de inicio de sesión
    cy.get('[data-test="username"]').type(this.data.user.username);
    cy.get('[data-test="password"]').type(this.data.user.password);
    cy.get('[data-test="login-button"]').click();

    //validar ingreso al inventario
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");

    //agregar productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    //validar cantidad en el carrito
    cy.get(".shopping_cart_badge").should("have.text", "2");

    //ir al carrito
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".title").should("contain.text", "Your Cart");

    //validar productos en el carrito
    cy.contains(".inventory_item_name", this.data.products.firstProduct).should("be.visible");
    cy.contains(".inventory_item_name", this.data.products.secondProduct).should("be.visible");

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type(this.data.checkout.firstName);
    cy.get('[data-test="lastName"]').type(this.data.checkout.lastName);
    cy.get('[data-test="postalCode"]').type(this.data.checkout.postalCode);
    cy.get('[data-test="continue"]').click();

    //validar resumen de compra
    cy.url().should("include", "/checkout-step-two.html");

    //validar pantalla de resumen de compra
    cy.contains("Checkout: Overview").should("be.visible");
    cy.contains("Payment Information").should("be.visible");
    cy.contains("Shipping Information").should("be.visible");
    cy.contains("Price Total").should("be.visible");

    //finalizar compra
    cy.get('[data-test="finish"]').scrollIntoView().should("be.visible").click();

    //validar compra
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("contain.text", this.data.expectedMessages.checkoutComplete);
    });
});

    