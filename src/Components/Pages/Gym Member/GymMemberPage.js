import React from 'react'
import SideBar from '../../../utils/sidebars/SideBar'
import './gymmember.css'
import TableP from './TableP'

function GymMemberPage() {
    return (
        <div id='main_gymmember'>
            <SideBar />
            <div className='gymmember_background'>
                <TableP />
            </div>
        </div>
    )
}
export default GymMemberPage