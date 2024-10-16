describe("MickeMovies Application", () => {
  // Test för att kontrollera att startsidan laddas korrekt
  it("loads the homepage successfully", () => {
    cy.visit("http://localhost:5173"); // Ändra port om nödvändigt
    cy.contains("Välkommen till MickeMovies!"); // Verifierar att texten finns på sidan
  });

  // Test för att kontrollera sökfunktion
  it("searches for a movie", () => {
    cy.visit("http://localhost:5173");
    cy.get('button img[alt="Hamburgermeny"]').click();
    cy.get('input[placeholder="Sök efter filmer..."]').type("Deadpool"); // Skriv in "Deadpool" i sökfältet
    cy.get("button").contains("Sök").click(); // Klicka på "Sök"-knappen
    cy.contains("Deadpool"); // Verifiera att Deadpool finns med i resultatet
  });
});
