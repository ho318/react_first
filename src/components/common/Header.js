import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext, useCallback, useMemo } from 'react'


function Header() {
    const [state, setState] = useState(""); // useState 훅
    const myRef = useRef(null); // useRef 훅

    useEffect(() => {
        // useEffect 훅
        // 컴포넌트가 마운트되거나 업데이트될 때 실행될 코드
        return () => {
            // 언마운트되기 전이나 업데이트 직전에 실행될 코드
        };
    }, [""]); // dependencies 배열에 있는 값이 변경될 때만 useEffect 실행

    const contextValue = useContext(""); // useContext 훅

    const memoizedCallback = useCallback(
        () => {
            // useCallback 훅
            // 함수가 새로 생성되지 않고 이전에 생성한 함수를 재사용함
        },
        [""]
    );

    const memoizedValue = useMemo(() => (""), [""]); // useMemo 훅

    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <Link to="/index.html">
                        <img src="./img/LOGO.jpg" alt="펩시 로고" />
                    </Link>
                </h1>
                <nav className="Normal">
                    <ul>
                        <li><a href="../index.html">HOME</a></li>
                        <li><a href="./html/HISTORY.html">HISTORY</a></li>
                        <li><a href="./html/WAY TO COME.html">WAY TO COME</a></li>
                    </ul>
                </nav>
                <Link to="/" className="btnCall">
                    <span>모바일 메뉴</span>
                </Link>
                <nav className="menuMo">
                    <h1>
                        <Link to="index.html">
                            <img src="./img/pepsiMo.png" alt="펩시 로고와 펩시상표명" />
                        </Link>
                    </h1>
                    <ul id="gnbMo">
                        <li><Link to="index.html">HOME</Link></li>
                        <li><Link to="./html/HISTORY.html">HISTORY</Link></li>
                        <li><Link to="./html/WAY TO COME.html">WAY TO COME</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}



export default Header