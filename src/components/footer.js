import React from "react"
import styled from "styled-components"
import { FaFacebook, FaLine, } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Button = styled.button`
  background-color: #f46b1d;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
`


function footer() {
    return (
        <div>
            <div
                style={{
                    paddingTop: "10px",
                    textAlign: "center",
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                <div className="text-3xl flex">
                    <a href='https://www.facebook.com/freshtohomemarket' target="_blank">
                        <FaFacebook style={{ color: '#0f90f3', marginRight: '10px' }}></FaFacebook>
                    </a>
                    <a href='https://lin.ee/rPvI7OR' target="_blank">
                        <FaLine style={{ color: 'rgba(0,185,1,0.9)', marginRight: '10px' }}></FaLine>
                    </a>
                    <a href="mailto:fresh2home.info@gmail.com" >
                        <IoMdMail style={{ color: '#D1D1D1', marginRight: '10px' }}></IoMdMail>
                    </a>
                </div>
                <a href='https://forms.gle/THmrnViAygtrhKP1A' target="_blank">
                    <Button>สนใจเป็นเข้าร่วมรายการ</Button>
                </a>
            </div>
            <div >
                <a href="/" style={{ textDecoration: "none", fontSize:'15px', color:'white'}}>
                © {new Date().getFullYear()}{" "}
                Fresh2Home
                </a>
            </div>
            { ` ` }
        </div>
    )
}

export default footer