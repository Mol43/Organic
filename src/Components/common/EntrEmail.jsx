

function EntrEmail() {
    return (
        <div className='flex justify-center items-center h-[300px]  relative'>
            <img src="./Photo.png" alt="" className='absolute w-[1000px] rounded-2xl' />
            <div className="absolute flex gap-40 items-center">
                <p className='font-extrabold text-[30px] text-white'>Subscribe to <br />
                    our Newsletter
                </p>
                <form className="flex gap-2">
                    <input type="email" className='w-[300px] h-[50px] bg-white outline-none px-3 rounded-xl' placeholder='Your Email Address' />
                    <button className='bg-[#274C5B] h-[50px] w-32 rounded-xl'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default EntrEmail