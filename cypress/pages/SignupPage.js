class SignupPage {
  //entrar na pagina 
  go() {
    cy.visit('/')

    cy.get('a[href="/deliver').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

  }
  //Passar as informação do usário 
  fillForm(deliver) {

    cy.get('input[name="fullName"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

    cy.contains('.delivery-method li', deliver.delivery_method).click()
    cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)



  }
  //clicar no botão 
  submit() {
    cy.get('form button[type="submit"]').click()
  }
  //verificar se existe um texto igual ao que você passou de metodo
  modalContentShouldBe(expectedMessage) {
    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
  }

  //verificar se existe um texto igual ao que você passou de metodo
  alertMessageShouldBe(expectedMessage) {
    //cy.get('.alert-error').should('have.text', expectedMessage)
    //melhor maneira
    cy.contains('.alert-error', expectedMessage).should('be.visible')
  }

}
//É tipo uma class

export default new SignupPage;

