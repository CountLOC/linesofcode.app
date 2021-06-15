describe("Basic one-off tests", () => {
	it("Tries to go to the oauth page without a code", () => {
		cy.visit("/oauth-consume");
		cy.location("pathname").should("equal", "/");
	});
});