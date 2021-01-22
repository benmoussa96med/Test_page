import { Selector, t, ClientFunction } from 'testcafe';
//required
const data = require('../Data/data.json');

//Global Variable
const getUrl = ClientFunction(() => window.location);

fixture('Data Testing ')

data.forEach(data => {
    console.log(data)
    test.page('http://the-internet.herokuapp.com/login')
        (`Login Page - ${data.expectedResult}`, async t => {
            //Act
            await t
                .maximizeWindow()
                .typeText('#username', data.username)
                .typeText('#password', data.password)
                .click('button')
                //Assert
            t.expect(Selector('div#flash').innerText, data.expectedResult)
        })
})