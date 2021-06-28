/* eslint-disable jest/valid-expect */
import { requestData } from './api'

describe('Requisição de Starred', () => {
	it('deve ser possivel realizar uma requisição para starred', async () => {
		const response = await requestData('felipidis/starred')

		expect(response.data[0]).toHaveProperty('name')
	})

	it('não deve ser possivel fazer uma requisição para starred', () => {
		expect(async () => {
			await requestData('fhskjhfjdshjsd/starred')
		}).rejects.toBeInstanceOf(Error)
	})
})
