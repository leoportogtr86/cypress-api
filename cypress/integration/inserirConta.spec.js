///<reference types="cypress"/>



describe('Inserindo uma conta', () => {

    it('Deve garantir que o usuário inseriu uma conta', () => {

        cy.getToken('leo@email.com', '123456789')
            .then((token) => {

                cy.request({

                    method: 'POST',
                    url: 'https://barrigarest.wcaquino.me/contas',
                    headers: { Authorization: `JWT ${token}` },
                    body: { nome: "Conta 7" }

                }).then((res) => {

                    expect(res.status).equal(201)
                    expect(res.body).to.have.property('nome', 'Conta 7')
                })


            })


    });

});


