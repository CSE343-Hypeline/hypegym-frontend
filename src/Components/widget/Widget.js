import React from 'react'
import './widget.css'

function Widget() {
    return (
        <div className='a'>
            <div className='widget'>
                <div className='title'>Total Number of Members</div>
                <div className='value'>210</div>
            </div>
            <div className='widget'>
                <div className='title'>Total Number of PTs</div>
                <div className='value'>18</div>
            </div>
            <div className='widget'>
                <div className='title'>Today</div>
                <div className='value'>102</div>
            </div>
            {/* <div className='widget'>
                <div className='title'>Total Number of Members</div>
                <div className='value'>567</div>
            </div>
            <div className='widget'>
                <div className='title'>Total Number of Members</div>
                <div className='value'>567</div>
            </div> */}
        </div>
    )
}
export default Widget