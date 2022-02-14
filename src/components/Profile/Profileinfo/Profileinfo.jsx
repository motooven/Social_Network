import React, {useState} from 'react';
import Arkane from "../../../Logotip/Arkaneee.jpg";
import s from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import User_03 from "../../../Logotip/user_03.png"
import ProfileDataForm from "./ProfileDataForm";

const Profileinfo = ({profile,status,updateStatus,isOwner,savePhoto, saveProfile}) => {
        let [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
         saveProfile(formData).then(
             () => {
                 setEditMode(false)
             }
         )
    }

    return (
        <div className={s.ProInfo}>
            {/*<img src={Arkane} alt=""/>*/}
            <div className={s.ProInfo__avDis}>
                <img src={profile.photos.large || User_03} /><br/>
                Загрузите новое фото ниже <br/><br/>
                {isOwner && <input  type={"file"} onChange={onMainPhotoSelected}/>}
                <br/><br/>
                { editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={ () => {setEditMode(true)} } profile={profile} isOwner={isOwner} /> }

                <hr/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <br/><hr/>

            </div>
        </div>
    );
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return  <div>
                { isOwner && <div><button onClick={goToEditMode}>Edit Mode</button><hr/></div> }
                <div><b>Номер пользователя:</b> {profile.userId}</div>
                <div><b>Полное имя:</b> {profile.fullName}</div>
                <div>
                    <b>Looking for a job: </b>
                    {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div><b>О бо мне:</b> {profile.aboutMe}</div>
                {/*<div><b>ВКонтакте:</b> {profile.contacts.vk}</div>*/}
                {/*<div><b>Ютуб:</b> {profile.contacts.youtube}</div>*/}
                <div><b>Статус:</b> {profile.lookingForAJobDescription}</div>

                <div>
                    <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }) }
                </div>
            </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}


export default Profileinfo;