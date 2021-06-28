import useRequest from '../../global/GlobalContext'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/Octocat.png'

const MainHome = () => {
	const history = useHistory()
	const { getData } = useRequest()
	const [input, setInput] = useState('')

	return (
		<main className='d-flex flex-column  flex-md-row vh-100 justify-content-center align-items-center bg-dark'>
			<div className='d-flex justify-content-center align-items-center'>
				<img className='w-75 ' src={Logo} alt='' />
			</div>

			<div className='container-fluid col-lg-6 col-md-6'>
				<h1 className='row justify-content-center text-white'>GIT SEARCH</h1>
				<div className='card card-body align-items-center bg-dark text-white border-0'>
					<p className='lead'> Informe o usuário que gostaria de buscar: </p>
					<input
						className='form-control'
						type='text'
						placeholder='Digita um nome de usuário'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) =>
							e.key === 'Enter' ? getData(input, 'Home', history) : null
						}
					/>
					<button
						className='btn btn-danger btn-block mt-3'
						onClick={() => getData(input, 'Home', history)}
					>
						Buscar
					</button>
				</div>
			</div>
		</main>
	)
}

export default MainHome
