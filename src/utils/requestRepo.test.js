/* eslint-disable jest/valid-expect */
import { requestData } from './api'

describe('Requisição de Repos', () => {
	it('deve ser possivel realizar uma requisição para repos', async () => {
		const response = await requestData('felipidis/repos')

		expect(response.data[0]).toHaveProperty('name')
	})

	it('não deve ser possivel fazer uma requisição para repos', () => {
		expect(async () => {
			await requestData('fhskjhfjdshjsd/repos')
		}).rejects.toBeInstanceOf(Error)
	})
})
