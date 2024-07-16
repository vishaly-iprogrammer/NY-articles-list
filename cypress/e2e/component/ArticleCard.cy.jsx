describe('Article Card Component Test', () => {
    it('should visit the page containing the Article Card component', () => {
      cy.visit('http://localhost:5173/');
    });
  
    it('should check if the Article Card component displays correctly', () => {
      cy.get('.card').should('be.visible');
    });
  
    it('should check if the Article image is displayed', () => {
      cy.get('.card img').should('be.visible');
    });
  
    it('should check if the Article title is displayed', () => {
      cy.get('.card h3').should('be.visible');
    });
  
    it('should check if the Article abstract is displayed', () => {
      cy.get('.card p').should('be.visible');
    });
  
   
  });