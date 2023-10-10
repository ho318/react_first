import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
         <main className="main">
        <ul className="panel">
            <li className="on">
                <img src="./img/펩시콘서트다이빙.jpg" alt="펩시 콘서트에서 스카이다이빙하는 남자" />
            </li>
            <li>
                <img src="./img/펩시해외광고모델.png" alt="해외 유명 축구선수들의 흑백사진이 박힌 펩시로고" />
            </li>
            <li>
                <img src="./img/펩시미식축구.jpg" alt="펩시 캔들에 박힌 입체적인 미식축구 선수들의 모습" />
            </li>
            <li>
                <img src="./img/펩시콘서트.jpg" alt="펩시콘서트 낙하산을 펼치고 내려오는 남자" />
            </li>
        </ul>
    </main>
    <section id="image">
        <img src="./img/펩시제로아이돌.jpg" alt="펩시제로 로고와 펩시제로 캔과 병이 나타난 모습" />
    </section>
    
    <figure className="figure">
        <div className="letter">
            <h2>ADVERTISE <span>광고</span> </h2>
        </div>
        <section className="ADVERTISE">
            <ul>
                <li className="on">
                    <img src="./img/ADVERTISE/아이브 펩시광고 MV.jpg" alt="아이브가 지하철에서 펩시광고를 찍는 모습" />
                </li>
                <li>
                    <img src="./img/ADVERTISE/아이브 펩시광고 MV2.jpg" alt="아이브가 콘서트에의 막바지를 장식하는 모습" />
                </li>
                <li>
                    <img src="./img/ADVERTISE/블랙핑크펩시광고.jpg" alt="블랙핑크가 펩시제로를 든 채 광고찍는 모습" />
                </li>
                <li>
                    <img src="./img/ADVERTISE/아이브 펩시광고 단체사진2.jpg" alt="아이브가 펩시제로슈거를 들고 광고찍는 모습" />
                </li>
                <li>
                    <img src="./img/ADVERTISE/비X몬스터엑스펩시광고.jpg" alt="비와 몬스터엑스가 방안에서 피자와 펩시콜라를 앞에두고 사진찍히는 모습" />
                </li>
                <li>
                    <img src="./img/ADVERTISE/아이즈원펩시광고.jpg" alt="아이즈원 멤버들이 각자 다른자세를 잡고 광고찍는 모습" />
                </li>
                <li>
                    <img src="./img/ADVERTISE/아이즈원펩시광고2.jpg" alt="아이즈원 멤버들이 각자 다른 자세잡고 광고찍는 모습" />
                </li>
            </ul>
        </section>

        <nav className="btns">
            <div className="prev">prev</div>
            <div className="next">next</div>
        </nav>
    </figure>

    <section className="content youtube">
        <div className="inner">
            <h1>VIDEO<span>비디오</span></h1>
            <div className="vidList">

            </div>
        </div>
    </section>

    <div className="SNS">
        <div className="SNS_header">
            <h2>SNS</h2>
            <div className="SNS_company">
                <div className="SNS_instagram">
                    <button className="instagram on">instagram</button>
                </div>
                <div className="SNS_twitter">
                    <button className="twitter">twitter</button>
                </div>
            </div>
        </div>
        <div className="SNS_BODY">
            <div className="instagram on active">
                <Link to="https://www.instagram.com/p/CfV9gigrTbv/">
                    <img src="./img/펩시 인스타/1/1.jpg" alt="스타쉽 소속 걸그룹 멤버들이 사진찍는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/CelKG5NJEm_/?img_index=1">
                    <img src="./img/펩시 인스타/2/2.jpg" alt="아이유가 펩시제로를 들고 사진찍는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/Co4VSOwpOwQ/?img_index=1">
                    <img src="./img/펩시 인스타/3/3.jpg" alt="아이유가 펩시제로를 들고 사진찍는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/CfECzcOLylT/">
                    <img src="./img/펩시 인스타/4/4.jpg" alt="장원영과 이서가 포즈잡는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/CaydmqLBo3m/?img_index=2">
                    <img src="./img/펩시 인스타/5/5.jpg" alt="남자가 펩시팔찌를 들고있는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/CfLxLJMLDPb/">
                    <img src="./img/펩시 인스타/6/6.jpg" alt="효정과 아린이 포즈잡는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/CsGiFI-pcIq/">
                    <img src="./img/펩시 인스타/7/7.jpg" alt="아이브가 펩시제로를 들고 사진찍는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/Cr0ghUopFsr/">
                    <img src="./img/펩시 인스타/8/8.jpg" alt="안유진과 가을이 펩시제로를 들고 사진찍는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/Cvj5bKmP-pE/">
                    <img src="./img/펩시 인스타/9/9.jpg" alt="아이브 멤버들이 사진찍는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/CvBnRzir-j4/?img_index=5">
                    <img src="./img/펩시 인스타/10/10.jpg" alt="이서가 펩시콜라를 마시는 모습" />
                </Link>
                <Link to="https://www.instagram.com/p/Cr3V7Axp2pJ/?img_index=2">
                    <img src="./img/펩시 인스타/11/11.jpg" alt="혜성이 펩시콜라를 들고 사진찍는 모습" /> 
                </Link>
                <Link to="https://www.instagram.com/p/CRVU1TWhuTU/?img_index=1">
                    <img src="./img/펩시 인스타/12/12.jpg" alt="비가 피자와 펩시콜라를 들고있는 모습" />
                </Link>
            </div>
            <div className="twitter">
                <Link to="https://twitter.com/VannerOfficial/status/1654500370587045891?s=20">
                    <img src="./img/펩시 트위터/1/1.jpg" alt="태환이 펩시제로를 들고있는 모습" />
                </Link>
                <Link to="https://twitter.com/IVEstarship/status/1656630242847465474">
                    <img src="./img/펩시 트위터/2/2.jpg" alt="아이브 멤버들이 펩시콜라를 들고있는 모습" />
                </Link>
                <Link to="https://twitter.com/VannerOfficial/status/1687802664284012544">
                    <img src="./img/펩시 트위터/3/3.jpg" alt="몬스터엑스 멤버들이 사진찍는 모습" />
                </Link>
                <Link to="https://twitter.com/wjsnglobal/status/1697070930970001533">
                    <img src="./img/펩시 트위터/4/4.jpg" alt="우주소녀 다영이 펩시콜라를 마시는 모습" />
                </Link>
                <Link to="https://twitter.com/wjsnglobal/status/1697071507036635492">
                    <img src="./img/펩시 트위터/5/5.jpg" alt="우주소녀 다영이 펩시콜라를 들고있는 모습" />
                </Link>
                <Link to="https://twitter.com/wjsnglobal/status/1697071333925089522">
                    <img src="./img/펩시 트위터/6/6.jpg" alt="우주소녀 다영이 펩시보드를 들고있는 모습" />
                </Link>
                <Link to="https://twitter.com/pepsi/status/1697044483286671733">
                    <img src="./img/펩시 트위터/7/7.jpg" alt="미국 유명 러셔가 펩시콜라를 마시는 장면" />
                </Link>
                <Link to="https://twitter.com/pepsi/status/1564672299202224130">
                    <img src="./img/펩시 트위터/8/8.jpg" alt="미국인 남녀두쌍이 펩시옷을 입고있는 모습" />
                </Link>
                <Link to="https://twitter.com/STARSHIPent/status/1540998308209995776">
                    <img src="./img/펩시 트위터/9/9.jpg" alt="크래비티 멤버 두명이 사진찍는 모습" />
                </Link>
                <Link to="https://twitter.com/CRAVITYstarship/status/1541723108738203649">
                    <img src="./img/펩시 트위터/10/10.jpg" alt="크래비티 멤버 두명이 펩시콜라를 마시려는 모습" />
                </Link>
                <Link to="https://twitter.com/STARSHIPent/status/1542810265745780736/photo/1">
                    <img src="./img/펩시 트위터/11/11.jpg" alt="아이돌 남녀 6명이 펩시콜라를 들고있는 모습" />
                </Link>
                <Link to="https://twitter.com/STARSHIPent/status/1543897411134767104">
                    <img src="./img/펩시 트위터/12/12.jpg" alt="아이돌 여성 4명이 펩시콜라 광고를 찍는 모습" />
                </Link>
            </div>
        </div>
    </div>


    <footer id="footer">
        <div className="inner">
            <div className="terms">
                <ul>
                    <li><Link to="#">개인정보취급방침</Link></li>
                    <li><Link to="#">이용약관</Link></li>
                </ul>
            </div>
            <div className="introduction">
                <ul>
                    <li>한국펩시콜라(주)</li>
                    <li>박제이콥수영</li>
                    <li>사업자등록번호 : 220-81-24527</li>
                    <li>서울 강남구 테헤란로98길 8, 14층</li>
                    <li>이벤트 관련 문의 HELPSERVICE2020@NAVER.COM</li>
                </ul>
            </div>
            <p>COPYRIGHT &copy; 2023 PEPSI. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
        </>
    )
}

export default Home