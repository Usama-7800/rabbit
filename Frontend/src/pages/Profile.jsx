import MyorderPage from './MyorderPage'

export default function Profile() {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className="grow container p-4 md:m-6 mx-auto ">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                    {/* left section  */}
                    <div className="w-full h-fit md:w-1/3 lg:w-1/4 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-lg p-6 ">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
                        <p className="text-lg text-gray-600 mb-4 ">johndoe@example.com</p>
                        <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Logout </button>
                    </div>
                    {/* right section  */}
                    <div className="w-full md:w-1/3 lg:w-3/4">
                        <MyorderPage />
                    </div>
                </div>
            </div>
        </div>
    )
}
