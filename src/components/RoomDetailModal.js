import { useSelector } from "react-redux";
import roomsData from "../data/roomsData.json";

export default function RoomDetailModal({ roomName, onClose }) {
  const { email } = useSelector((state) => state.auth.user);
  const roomData = roomsData.filter((data) => {
    return data.email === email && data.room === roomName;
  });
  let typeTotals = roomData.reduce((res, item) => {
    if(!res[item.type])
        res[item.type] = 0;
    
    res[item.type] += item.price.toFixed(2) * item.qty;
    return res;
}, {});

let roomTotal = roomData.reduce((res, item) => {
    if(!res['total'])
        res['total'] = 0;
    
    res['total'] += item.price.toFixed(2) * item.qty;
    return res;
}, {});

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {roomName} Room Details
              </h3>
              <button
                onClick={onClose}
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Qty
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Row Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {roomData.map((item, index) => (
                            <tr key={index} className="border-b">
                              <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                {item.Product}
                              </td>
                              <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                {item.type}
                              </td>
                              <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                {item.qty}
                              </td>
                              <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                {item.price.toFixed(2)} EUR
                              </td>
                              <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                {(item.price.toFixed(2) * item.qty).toFixed(2)} EUR
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="text-center p-5">
                      <p>Total Worth: {roomTotal.total.toFixed(2)} EUR</p>
                      { Object.entries(typeTotals).map((t,k) => <p key={k}>{t[0]}: {t[1].toFixed(2)} EUR</p>) }          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
