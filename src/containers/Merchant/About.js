import React from 'react'
import Popper from 'popper.js'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdAccessTime, MdLocationOn } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { FiPhoneOutgoing } from 'react-icons/fi'

const About = ({ merchant: { description, facebook, foodType, id, image, location, name, openingTime, openingDay, payment, tel } }) => {
  // dropdown props
  const dayWork = "Sun Mon Tue Wed Thur Fri Sat"
  const today = Date().toString().substring(0, 3).toLowerCase()
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  // bg colors
  let bgColor = 'bg-gray-800'

  return (
    <>
      <div className="flex flex-wrap mb-2">
        <div className="w-full px-3">
          <div className="relative inline-flex align-middle w-full">
            <div className={`absolute left-0 -mt-3 rounded-full pb-1 pt-2 px-4 ${openingDay.toLowerCase().split(" ").includes(today) ? "bg-teal-600" : "bg-orange-600"}`}>
              <p className="text-white font-bold">{openingDay.toLowerCase().split(" ").includes(today) ? "วันนี้ร้านเปิด" : "วันนี้ร้านปิด"}</p>
            </div>
            <AiOutlineInfoCircle
              className="absolute right-0 -mt-3 text-3xl rounded-full "
              style={{ backgroundColor: 'white', transition: 'all .15s ease' }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            />
            {/* //! if remove below button, code will error */}
            <button
              className={
                'hide'
                // " text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                // bgColor
              }
              style={{ transition: 'all .15s ease' }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            >
              {/* {color === "white" ? "White Dropdown" : color + " Dropdown"} */}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'bg-white text-base z-40 float-right py-2 list-none text-left rounded shadow-xl mt-1 w-full mt-5'
              }
              style={{ minWidth: '12rem' }}
            >
              <a
                className="text-base py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 flex relative"
                href={`${facebook}`}
                target="_blank"
              >
                <FaFacebook
                  style={{
                    fontSize: '1.5em',
                    margin: '0 20px 0 0',
                    color: '#006fff',
                  }}
                />
                {name}{' '}
              </a>
              <a
                className="text-base py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 flex relative"
                href={`tel:${tel}`}
              >
                <IoIosCall
                  style={{
                    fontSize: '1.5em',
                    margin: '0 20px 0 0',
                    color: '#006fff',
                  }}
                />
                {tel}
                <FiPhoneOutgoing
                  className="absolute right-0 mr-8"
                  style={{ transform: 'translateY(2px)' }}
                />{' '}
              </a>
              <a
                className="text-base py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 flex relative"
                href={`${location}`}
                target="_blank"
              >
                <MdLocationOn
                  style={{
                    fontSize: '1.6em',
                    margin: '0 20px 0 0',
                    color: '#006fff',
                  }}
                />{' '}
                See in map{' '}
              </a>

              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              {openingTime && (
                <p className="flex text-base py-2 px-4 font-normal block w-full bg-transparent text-gray-800 w-full">
                  <MdAccessTime
                    className="my-auto mr-4"
                    style={{ fontSize: '1.6em' }}
                  />
                  <div>
                    {dayWork.toString().split(" ").map(val => {
                      return (
                        <div>
                          <div className={`flex text-lg ${today === val.toLowerCase() ? "text-blue-700" : "text-gray-500"}`}>
                            <div className="w-12">{val + "\t"}</div>
                            {openingDay.split(" ").includes(val) ? `${openingTime}` : "CLOSE"}</div>
                        </div>
                      )
                    })}
                  </div>
                </p>
              )}
              <p
                className={
                  'text-sm py-2 px-4 font-normal block w-full bg-transparent text-gray-800 w-full flex flex-warp'
                }
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
