it('titles are correct', () => {
  cy.visit('http://localhost:3000');

  cy.get('title').should('have.text', 'Shozzle');
  cy.get('h1').contains('frontend');
});
