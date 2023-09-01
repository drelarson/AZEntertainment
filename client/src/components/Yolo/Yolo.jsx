import React from 'react';
import './yolo.css'
import YoloMap from './YoloMap';
import Jeep from './images/jeep.jpg'
import Jeep2 from './images/jeep2.png'
import Jeep5 from './images/jeep5.png'
import UserMap from '../Users/UserMap';
import YoloSideBar from './YoloSideBar';

const Yolo = ({
    yoloList,
    setYoloList,
    theme,
    userList,
    setUserList,
    matches,
    setMatches,
    setMatchesList,
    matchesList,
    showUserInfo
}) => {

    return (
        <>
            <YoloSideBar
                theme={theme}
                userList={userList}
                setUserList={setUserList}
                matchesList={matchesList}
                setMatchesList={setMatchesList}
                setMatches={setMatches}
                yoloList={yoloList}
                setYoloList={setYoloList}
            />

            <div className={theme}>

                <div className="row row-padding">
                    <div className="container two-thirds">
                        {matches && (
                            <YoloMap
                                array={matchesList}
                                userList={userList}
                                setUserList={setUserList}
                                setYoloList={setYoloList}
                            />
                        )}
                        {!matches && (
                            <YoloMap
                                array={yoloList}
                                userList={userList}
                                setUserList={setUserList}
                                setYoloList={setYoloList}
                            />
                        )}
                    </div>
                    <div className="container third">     
                            <div className="ad-center padding-large ad-padding">

                                <UserMap
                                    array={userList}
                                    userList={userList}
                                    setUserList={setUserList}
                                />


                            </div>
                     
                        <p className="ad-center padding-large ad-padding">
                            <img src={Jeep} className='image' alt='jeep ad' />
                            We are always working on expanding our partner list... Please,
                            welcome Jeep to AZ Entertainment! In true Jeep fashion they
                            have elected to sponsor all Extreme Adventures througout Arizona.
                        </p>
                        <p className="ad-center padding-large ad-padding">
                            <img src={Jeep2} className='image' alt='jeep' />
                            With locations all across the state, you'll never miss an opportunity
                            to check out all new models of Jeep. They are offering 10% off any purchase
                            from an AZ Entertainment user. Jump on this deal while it lasts!
                        </p>
                        <p className="ad-center padding-large ad-padding">
                            <img src={Jeep5} className='image' alt='jeep' />
                            JEEP 2023!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Yolo
