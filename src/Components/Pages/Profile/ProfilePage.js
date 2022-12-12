import React from 'react'
import SideBar from '../../../utils/sidebars/SideBar'
import './profile.css'

function ProfilePage({ setAuth }) {
    return (
        <div id='main_profile'>

            <SideBar setAuth={setAuth} />
            <div className='profile_div'>
                USER PROFILE PAGE
            </div>
        </div>
    )
}
export default ProfilePage