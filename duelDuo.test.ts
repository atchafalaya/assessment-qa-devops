
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:127.0.0.1:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe('true')
})

// test('Clicking draw button shows bot choices', async () => {
//     const draw = await driver.findElement(By.id('choices'))
//     const displayed = await draw.isDisplayed()
//     expect(displayed).toBe('true')
// })

// test('Add To Duo adds bot to player id', async () => {
//     const addtoduo = await driver.findElement(By.id('playerDuo'))
//     const displayed = await addtoduo.isDisplayed()
//     expect(displayed).toBe('true')
// })