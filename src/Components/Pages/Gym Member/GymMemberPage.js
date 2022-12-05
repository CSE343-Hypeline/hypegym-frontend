import React from 'react'
import SideBar from '../../../utils/sidebars/SideBar'
import './gymmember.css'
import TableP from './TableP'

function GymMemberPage({ setAuth }) {
    return (
        <div id='main_gymmember'>
            <SideBar setAuth={setAuth} />
            <div className='gymmember_background'>göbgn
                <TableP />
            </div>
        </div>
    )
}
export default GymMemberPage