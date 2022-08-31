import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

export default function Navbar({email}) {

    const dispatch = useDispatch()

    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Locker Boxes </span>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm text-white lg:flex-grow">
                ({ email })
            </div>
            <div>
            <button
                onClick={() => dispatch(logout())}
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">
                Logout
            </button>
            </div>
        </div>
        </nav>
    );
}