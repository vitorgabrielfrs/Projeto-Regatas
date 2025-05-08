describe('Validação de login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5503/login.html'); // ajuste para o endereço correto
  });

  it('deve exibir erro com e-mail inválido', () => {
    cy.get('#username').type('invalido');
    cy.get('#password').type('12345');
    cy.get('#botao').click();
    cy.get('#errorUser').should('contain', 'E-mail inválido');
    cy.get('#errorMessage').should('contain', 'Email e/ou senha inválidos');
  });

  it('deve exibir erro com senha curta', () => {
    cy.get('#username').type('teste@exemplo.com');
    cy.get('#password').type('123');
    cy.get('#botao').click();
    cy.get('#errorSenha').should('contain', 'A senha deve ter pelo menos 5 caracteres');
    cy.get('#errorMessage').should('contain', 'Email e/ou senha inválidos');
  });

  it('deve aceitar login com dados válidos', () => {
    cy.get('#username').type('teste@exemplo.com');
    cy.get('#password').type('12345');
    cy.get('#botao').click();
    cy.get('#errorMessage').should('contain', 'Login bem-sucedido!');
  });
});