import React from 'react'
import Popper from 'popper.js'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdAccessTime, MdLocationOn } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { FiPhoneOutgoing } from 'react-icons/fi'

const AboutDropdown = ({
  dataMo: {
    shop_name,
    facebook,
    location,
    open_date,
    open_time,
    tel,
    descript_shop,
    isOpen,
  },
}) => {
  // dropdown props
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
      <div className="flex flex-wrap -mb-3">
        <div className="w-full px-5">
          <div className="relative inline-flex align-middle w-full">
            <AiOutlineInfoCircle
              className="absolute right-0 mr-5 -mt-8 p-1 text-4xl rounded-full "
              style={{ backgroundColor: 'white', transition: 'all .15s ease' }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            />
            {/* //! if remove buton below code will error */}
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
                'bg-white text-base z-50 float-right py-2 list-none text-left rounded shadow-2xl mt-1 w-full'
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
                {shop_name}{' '}
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

              {open_time || open_date ? (
                <p className="text-base py-2 px-4 font-normal block w-full bg-transparent text-gray-800 w-full flex flex-warp">
                  <MdAccessTime
                    style={{ fontSize: '1.6em', margin: '0 20px 0 0' }}
                  />{' '}
                  {open_date ? <span>{open_date}&nbsp;</span> : ''}
                  {open_time}
                </p>
              ) : (
                ''
              )}
              <p
                className={
                  'text-sm py-2 px-4 font-normal block w-full bg-transparent text-gray-800 w-full flex flex-warp'
                }
              >
                {descript_shop}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutDropdown
