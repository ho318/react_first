import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext, useCallback, useMemo } from 'react'


function Header() {
    const [state, setState] = useState("");
    const myRef = useRef(null);

    useEffect(() => {
        return () => {
        };
    }, [""]);

    const contextValue = useContext("");

    const memoizedCallback = useCallback(
        () => {
        },
        [""]
    );

    const memoizedValue = useMemo(() => (""), [""]);

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