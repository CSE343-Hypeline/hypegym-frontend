import React from 'react'
import { useState } from 'react'
import "./measurement.css";

const measure = [
    { region: "fgfg", now: "50" },
    { region: "kg", now: "80" }
]

const Row = (props) => {
    const { region, now } = props
    return (
        <tr>
            <td>{region}</td>
            <td>{now}</td>
        </tr>
    )
}

const Table = (props) => {
    const { data } = props
    console.log(data)
    return (
        <table>
            <tbody>
                {data.map((row, index) =>
                    <Row key={`key-${index}`}
                        region={row.region}
                        now={row.now} />)}

            </tbody>
        </table>
    )
}

function Measurement() {
    const [rows, setRows] = useState(measure)
    return (
        <div className='Measurement'>
            <div><h1 className='titlem'>Table Measurement</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                <Table data={rows} /></div>
        </div>


    )
}
export default Measurement