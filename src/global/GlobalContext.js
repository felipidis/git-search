import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import { BASE_URL, client_id, client_secret } from '../constants/config'
import { toProfile } from '../routes/coordinator'

const Request = createContext()

export const Provider = ({ children }) => {
	const [input, setInput] = useState('')
	const [data, setData] = useState([])

	const getData = (inp = input, context, history) => {
		axios
			.get(
				`${BASE_URL}/${inp}?client_id=${client_id}&client_secret=${client_secret}`
			)
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
				input,
				setInput,
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
	const { input, setInput, data, setData, getData } = request
	return { input, setInput, data, setData, getData }
}
