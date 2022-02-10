import React from 'react';
import Arkane from "../../../Logotip/Arkaneee.jpg";
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div className={s.ProInfo}>
            {/*<img src={Arkane} alt=""/>*/}
            <div className={s.ProInfo__avDis}>
                <img src={props.profile.photos.large} /><br/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <hr/>
                <ProfileStatusWithHooks status={props.profile.aboutMe} updateStatus={props.updateStatus} />
                <br/><hr/>

            </div>
        </div>
    );
};

export default Profileinfo;