import RoomDetailModal from './RoomDetailModal'
import { useState } from 'react'

export default function Room({roomName, total})
{
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className="bg-white w-3/12 p-5">
            <h1 className="text-center text-2xl font-bold p-2">{roomName}</h1>
            <hr />
            <p className="text-center p-2">Total Value: {total.toFixed(2)} EUR</p>
            <button onClick={() => setShowDetail(true)} className="block w-full py-1 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:outline-none active:bg-blue-800">
                Detail
            </button>
            {showDetail ? <RoomDetailModal roomName={roomName} onClose={() => setShowDetail(false)} /> : null}
        </div>
    )
}