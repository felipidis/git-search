/* eslint-disable jest/valid-expect */
import { requestData } from './api'

describe('Requisição de User', () => {
	it('deve ser possivel realizar uma requisição para user', async () => {
		const response = await requestData('felipidis')

		expect(response.data).toHaveProperty('avatar_url')
	})

	it('não deve ser possivel fazer uma requisição para user', () => {
		expect(async () => {
			await requestData('fhskjhfjdshjsd')
		}).rejects.toBeInstanceOf(Error)
	})
})
