import React from 'react'
import './SideBar.css'
import logo from './logo.png'
import history from '../../history'
export default function SideBar() {
	return (
		<div id='SideBar'>
			<div className='Logo'>
				<img src={logo} srcSet='' />
			</div>
			<div className='content'>
				<div className='menu_top'>
					<button className='menu_item' onClick={() => {

						history.push('/abc')
						history.go()

					}}>
						{/* < img src={logo} srcSet='' /> */}
						<i class="bi bi-exclude"></i>
						<span>DASHBOARD</span>
					</button>
					<button className='menu_item'>
						<i class="bi bi-grid-3x3"></i>
						<span>GYM MEMBER</span>
					</button>
					<button className='menu_item'>
						<i class="bi bi-grid-3x3-gap-fill"></i>
						<span>PERSONAL TRAINER</span>
					</button>
				</div>
				<div className='menu_bottom'>
					{/* <div className='menu_item'>
						<img src={logo} srcSet='' />
						<span>Dashboard</span>
					</div> */}
					<button className='menu_item'>
						<i class="bi bi-x-circle"></i>
						<span>LOG OUT</span>
					</button>
				</div>
			</div>
		</div >
	)
}
