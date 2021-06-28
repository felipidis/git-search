import React, { useState, useEffect } from 'react'
import useRequest from '../global/GlobalContext'
import { requestData } from '../utils/api'
import { useParams } from 'react-router-dom'
import Repo from '../components/Repo'
import User from '../components/User'
import SearchBar from '../components/SearchBar'

const MainProfile = () => {
	const { data, getData } = useRequest()
	const [userData, setUserData] = useState([])
	const [input] = useState('')
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
			{data.id ? (
				<div>
					<header className='mb-3'>
						<SearchBar />
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
								<h5 className='text-white text-center p-3'>
									{' '}
									Nenhum repositório encontrado!
								</h5>
							)}
						</section>
					</main>
				</div>
			) : (
				<div className='vh-100 overflow-hidden'>
					<header className='mb-3'>
						<SearchBar />
					</header>
					<h1 className='text-center text-white m-5 p-5'>
						Usuário Não Existe!
					</h1>
				</div>
			)}
		</div>
	)
}

export default MainProfile
