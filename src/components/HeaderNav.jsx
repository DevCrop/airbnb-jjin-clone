import React from 'react'
import HeaderLogo from "../assets/airbnb.png"

const HeaderNav = () => {
  return (
   <header>
        <div className="container">
            <div className="header-container">
                <div className="header-logo">
                    <h1>
                        <a href="#">
                            <img src={HeaderLogo} alt="에어비앤비 로고입니다." />
                        </a>
                    </h1>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a href="#">숙소</a>
                        </li>
                        <li>
                            <a href="#">체험</a>
                        </li>
                        <li>
                            <a href="#">온라인 체험</a>
                        </li>
                    </ul>

                </nav>
                <div className="header-more">
                    <a href="#">More Btn</a>
                </div>
            </div>
        </div>
   </header>
  )
}

export default HeaderNav