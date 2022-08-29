import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

export default function RoomsOverviews()
{
    const { email } = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Locker Boxes Challenge</h1>
            <h2>Rooms Overviews page.</h2>
            <h3>Hi, { email }!</h3>
            <button onClick={() => dispatch(logout())}>
                Logout
            </button>
        </div>
    )
}