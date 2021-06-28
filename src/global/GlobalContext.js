import React, { useState, createContext, useContext } from 'react'
import { requestData } from '../utils/api'
import { toProfile } from '../routes/coordinator'

const Request = createContext()

export const Provider = ({ children }) => {
	const [data, setData] = useState([])

	const getData = (inp, context, history) => {
		const promise = requestData(inp)
		promise
			.then((response) => {
				if (response.status === 200) {
					setData(response.data)
					if (context === 'Home') {
						toProfile(history, inp)
					} else {
					}
				} else if (response.status === 404) {
					alert('Usuário não existe!')
				}
			})
			.catch((error) => alert('Usuário não existe!'))
	}

	return (
		<Request.Provider
			value={{
				data,
				setData,
				getData,
			}}
		>
			{children}
		</Request.Provider>
	)
}

export default function useRequest() {
	const request = useContext(Request)
	const { data, setData, getData } = request
	return { data, setData, getData }
}
