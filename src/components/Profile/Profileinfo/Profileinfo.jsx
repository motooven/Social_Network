import React from 'react';
import Arkane from "../../../Logotip/Arkaneee.jpg";
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const Profileinfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ProInfo}>
            {/*<img src={Arkane} alt=""/>*/}
            <div className={s.ProInfo__avDis}>
                <img src={profile.photos.large} /><br/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <hr/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <br/><hr/>

            </div>
        </div>
    );
};

export default Profileinfo;