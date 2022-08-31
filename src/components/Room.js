export default function Room({roomName, total})
{
    return (
        <div className="bg-white w-3/12 p-5">
            <h1 className="text-center text-2xl font-bold p-2">{roomName}</h1>
            <hr />
            <p className="text-center p-2">Total Value: {total.toFixed(2)} EUR</p>
            <button className="block w-full py-1 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:outline-none active:bg-blue-800">
                Detail
            </button>
        </div>
    )
}