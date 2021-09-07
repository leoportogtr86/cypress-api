# Testes de Api com Cypress
![](https://www.softwaretestingclass.com/wp-content/uploads/2018/07/API-Testing.png)

---

## Curso

Este é um guia de referência para testes automatizados de API utilizando o framework cypress, baseado no curso [Testes de Aplicações Modernas com Cypress](https://www.udemy.com/course/testes-cypress/learn/lecture/16891454?start=557#overview)

---

## Aplicação a Ser Testada

### Frontend

A aplicação a ser testada será => https://barrigareact.wcaquino.me/

### Backend

Consumindo a API => https://barrigarest.wcaquino.me

---

## Teste de Login

```js

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



```


