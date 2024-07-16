describe('Article Detail Page Test', () => {
  it('should visit the Article Detail Page', () => {
    cy.visit('http://localhost:5173/article/100000009570453');
  });

  it('should wait for the data to load and then check if the article image is displayed', () => {
 
    cy.get('.image').should('be.visible');
  });

  it('should check if the article title is displayed', () => {
    
    cy.get('.label_box').should('be.visible');
  });

  it('should check if the article content is displayed', () => {
   
    cy.get('.article-content').should('be.visible');
  });

  it('should check if the author name is displayed', () => {
  
    cy.get('.byWriter').should('be.visible');
  });

 
});
