import React, { useState, useEffect } from 'react'
import useRequest from '../../global/GlobalContext'
import { requestData } from '../../utils/api'
import { useParams, useHistory } from 'react-router-dom'
import Repo from '../Repo'
import User from '../User'

const MainProfile = () => {
	const { data, getData } = useRequest()
	const [userData, setUserData] = useState([])
	const [input, setInput] = useState('')
	const history = useHistory()
	const { user } = useParams()

	useEffect(() => {
		if (user !== undefined) {
			getData(user)
		}
	}, [user, getData])

	useEffect(() => {
		getStarreds()
		getRepos()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const getRepos = () => {
		const promise = requestData(`${input.length ? input : user}/repos`)
		promise
			.then((response) => setUserData(response.data))
			.catch((error) => console.log(error.message))
	}

	const getStarreds = () => {
		const promise = requestData(`${input.length ? input : user}/starred`)
		promise
			.then((response) => setUserData(response.data))
			.catch((error) => console.log(error.message))
	}

	const listOfRepos = userData.map((value) => {
		return (
			<div key={value.name}>
				<Repo repo={value} />
			</div>
		)
	})

	return (
		<div className='container-fluid h-100 bg-dark'>
			<header className='mb-3'>
				<h1 className='d-flex justify-content-center text-white'>GIT SEARCH</h1>
				<div className='card card-body align-items-center bg-dark border-0 '>
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
			</header>

			<main className='row'>
				<section className='col-12 col-md-6'>
					<User user={data} />
				</section>
				<section className='card-body col-12 col-md-6'>
					<div className='row mb-2 justify-content-around'>
						<button onClick={getStarreds} className='btn btn-danger col-5'>
							Starreds
						</button>
						<button onClick={getRepos} className='btn btn-danger col-5'>
							Repos
						</button>
					</div>
					{userData.length ? (
						listOfRepos
					) : (
						<p className='text-white'> Nenhum repositório encontrado!</p>
					)}
				</section>
			</main>
		</div>
	)
}

export default MainProfile
