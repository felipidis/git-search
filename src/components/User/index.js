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
			<div className='card-body text-center'>
				<h3 className='title text-white mt-2'>{user.name}</h3>
				<h4 className='subTitle text-white'>{user.login}</h4>
				<p className='text-white m-0 '>
					Repositories:{' '}
					<span className='badge badge-success'>{user.public_repos}</span>
				</p>
				<p className='text-white m-0'>
					Followers:{' '}
					<span className='badge badge-primary'>{user.followers}</span>
				</p>
				<p className='text-white m-0'>
					Followings: <span className='badge badge-info'>{user.following}</span>
				</p>
				{user.bio && (
					<p className='mt-2 border rounded px-2 text-white'>{user.bio}</p>
				)}
			</div>
			<div className='card-body pt-0'>
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
