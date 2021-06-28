import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useRequest from '../../global/GlobalContext'

const SearchBar = () => {
	const [input, setInput] = useState('')
	const history = useHistory()
	const { getData } = useRequest()

	return (
		<div>
			<h1 className='d-flex justify-content-center text-white'>GIT SEARCH</h1>
			<div className='card card-body align-items-center bg-dark border-0 p-0 '>
				<p className='lead text-white text-center'>
					Informe o usuário que gostaria de buscar:
				</p>
				<div className='row container justify-content-center'>
					<input
						className='form-control col-12 col-md-8 col-lg-6 '
						type='text'
						placeholder='Digite um nome de usuário'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) =>
							e.key === 'Enter' ? getData(input, 'Home', history) : null
						}
					/>
					<button
						className='btn btn-danger mt-2 mt-md-0 ml-md-3 col-12 col-md-3'
						onClick={() => getData(input, 'Home', history)}
					>
						Buscar
					</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBar
