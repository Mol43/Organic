


function LogoHeader( { bgImg , title }) {
    return (
      <div className={`w-full h-[350px] flex items-center justify-center relative mt-4`}>
          <img src={bgImg} alt="img" className="w-full h-full absolute top-0 left-0" />
          <h2 className="text-[70px] text-[#274C5B] z-10 font-bold">{title}</h2>
      </div>
    )
  }
  
  export default LogoHeader
  