import roomsData from '../data/roomsData.json'
import Navbar from '../components/Navbar'
import Room from '../components/Room'
import { useSelector } from 'react-redux'

export default function RoomsOverviews()
{
    const { email } = useSelector((state) => state.auth.user)
    const userRoomsData = roomsData.filter(data => data.email === email);
    const rooms = [...new Set(userRoomsData.map(item => item.room))];
    let roomTotals = userRoomsData.reduce((res, item) => {
        if(!res[item.room])
            res[item.room] = 0;
        
        res[item.room] += item.price.toFixed(2) * item.qty;
        return res;
    }, {});

    return (
        <div className="bg-gray-200 h-screen">
            <main>
                <Navbar email={email} />
                <section className="text-center p-10">
                    <span>You have {rooms.length} room(s).</span>
                </section>
                <section>
                    <div className="flex flex-row justify-around">
                        {rooms.map((room) => (
                            <Room key={room} roomName={room} total={roomTotals[room]} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}