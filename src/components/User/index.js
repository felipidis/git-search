import React from 'react'

const Profile = ({ user }) => (
	<div className=' d-flex justify-content-center'>
		<div
			className='card card-body bg-dark border-0 rounded '
			style={{ maxWidth: '400px' }}
		>
			<img
				className='card-img-top rounded-circle'
				src={user.avatar_url}
				alt='foto'
			/>
			<ul className='list-group list-group-flush rounded '>
				<li className='list-group-item bg-dark text-white border-0'>
					Repositories:{' '}
					<span className='badge badge-success'>{user.public_repos}</span>
				</li>
				<li className='list-group-item bg-dark text-white border-0'>
					Followers:{' '}
					<span className='badge badge-primary'>{user.followers}</span>
				</li>
				<li className='list-group-item bg-dark text-white border-0'>
					Followings: <span className='badge badge-info'>{user.following}</span>
				</li>
			</ul>
			<div className='card-body'>
				<a
					href={`${user.html_url}`}
					target='blank'
					className='btn btn-danger btn-block'
				>
					See Profile
				</a>
			</div>
		</div>
	</div>
)

export default Profile
