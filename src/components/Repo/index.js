import React from 'react'

const Repo = ({ repo }) => (
	<div className='card card-body mb-3'>
		<div className='row'>
			<div className='mx-1'>
				<a href={`${repo.html_url}`} target='blank'>
					{repo.name}
				</a>
			</div>
			<div>
				<span className='badge badge-primary mx-1'>
					Stars: {repo.stargazers_count}
				</span>
				<span className='badge badge-secondary mx-1'>
					Watch: {repo.watchers_count}
				</span>
				<span className='badge badge-success mx-1'>
					Forks: {repo.forks_count}
				</span>
			</div>
		</div>
	</div>
)

export default Repo
