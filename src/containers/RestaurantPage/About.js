import React, { useEffect } from "react"

// import { MdAccessTime, MdLocationOn } from "react-icons/md"
// import { FaFacebook } from "react-icons/fa"
// import { IoIosCall } from "react-icons/io"
// import { FiPhoneOutgoing } from "react-icons/fi"
// import ClipLoader from "react-spinners/ClipLoader"

const About = ({ dataMo:{shop_name,facebook,location,open_date,open_time,tel,descript_shop,isOpen} }) => {
    return (
        <>
            <div className={`p-5 text-lg ${isOpen ? 'block' : 'hidden'}`}>
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800" href={`${facebook}`} target="_blank">
                    {shop_name}
                </a>
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800" href={`tel:${tel}`} >
                    {tel}
                </a>
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800" href={`${location}`} target="_blank">
                    See in map
                </a>
                {open_time || open_date ? (
                    <span className="block py-1">{open_date ? (<span>{open_date}&nbsp;</span>) : ("")}{open_time}</span>
                ) : ("")}
                <span className="block py-1 text-sm">{descript_shop}</span>
            </div>
        </>
    )
}

export default About