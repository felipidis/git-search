import Logo from '../assets/Octocat.png'
import SearchBar from '../components/SearchBar'
const Home = () => {

	return (
		<main className='d-flex flex-column  flex-md-row vh-100 justify-content-center align-items-center bg-dark'>
			<section className='d-flex justify-content-center align-items-center col-md-5'>
				<img className='w-75 ' src={Logo} alt='' />
			</section>

			<section className='container-fluid col-lg-7 col-md-7'>
				<SearchBar />
			</section>
		</main>
	)
}

export default Home
