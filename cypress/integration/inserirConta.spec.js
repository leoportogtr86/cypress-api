///<reference types="cypress"/>



describe('Inserindo uma conta', () => {

    it('Deve garantir que o usuário inseriu uma conta', () => {

        cy.request({

            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: { "email": "leo@email.com", "senha": "123456789", "redirecionar": false }

        }).its('body.token').should('not.be.empty')
            .then((token) => {

                cy.request({

                    method: 'POST',
                    url: 'https://barrigarest.wcaquino.me/contas',
                    headers: { Authorization: `JWT ${token}` },
                    body: { nome: "Conta 6" }

                }).then((res) => {

                    expect(res.status).equal(201)
                    expect(res.body).to.have.property('nome', 'Conta 6')
                })


            })


    });

});


