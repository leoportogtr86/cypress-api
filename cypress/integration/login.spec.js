///<reference types="cypress"/>


describe('Teste de login', () => {

    it('Deve garantir que o usuário realizou login', () => {

        cy.request({

            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: { "email": "leo@email.com", "senha": "123456789", "redirecionar": false }

        }).then((res) => {

            console.log(res)

        })
    });

});


