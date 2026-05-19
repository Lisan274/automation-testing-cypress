describe('Prueba API - Usuario Petstore', () => {
    beforeEach(() => {
        cy.fixture("petstore-user-data").as("data");
    });

    it("Debe crear, consultar, actualizar, consultar otra vez y eliminar un usuario", function () {
        const baseUrl = this.data.baseUrl;
        const user = this.data.user;
        const updatedUser = this.data.updatedUser;

        // Crear un nuevo usuario
        cy.request({
            method: "POST",
            url: `${baseUrl}/user`,
            body: user,
            headers: { "Content-Type": "application/json", },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("code", 200);
            expect(response.body).to.have.property("type", "unknown");
            expect(response.body).to.have.property("message");
        });

        // Consultar el usuario creado
        cy.request({
            method: "GET",
            url: `${baseUrl}/user/${user.username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(user.username);
            expect(response.body.firstName).to.eq(user.firstName);
            expect(response.body.lastName).to.eq(user.lastName);
            expect(response.body.email).to.eq(user.email);
            expect(response.body.phone).to.eq(user.phone);
        });

        // Actualizar el usuario
        cy.request({
            method: "PUT",
            url: `${baseUrl}/user/${user.username}`,
            body: updatedUser,
            headers: { "Content-Type": "application/json", },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("code", 200);
            expect(response.body).to.have.property("type", "unknown");
            expect(response.body).to.have.property("message");
        });

        // Consultar el usuario actualizado
        cy.request({
            method: "GET",
            url: `${baseUrl}/user/${updatedUser.username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(updatedUser.username);
            expect(response.body.firstName).to.eq(updatedUser.firstName);
            expect(response.body.lastName).to.eq(updatedUser.lastName);
            expect(response.body.email).to.eq(updatedUser.email);
            expect(response.body.phone).to.eq(updatedUser.phone);
        });

        // Eliminar el usuario
        cy.request({
            method: "DELETE",
            url: `${baseUrl}/user/${updatedUser.username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("code", 200);
            expect(response.body).to.have.property("type", "unknown");
            expect(response.body).to.have.property("message", updatedUser.username);
        });

        // Verificar que el usuario ha sido eliminado
        cy.request({
            method: "GET",
            url: `${baseUrl}/user/${updatedUser.username}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property("code", 1);
            expect(response.body).to.have.property("type", "error");
            expect(response.body).to.have.property("message", "User not found");
        });
    });
});