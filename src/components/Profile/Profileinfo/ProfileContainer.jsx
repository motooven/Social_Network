import React from 'react'
import s from "./Profile.module.css"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {


    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            //userId = 12938
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        //this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile()
        }
    }

    render() {
        //console.log("RENDER PROFILE")
        return (
                <div className={s.content}>
                    <Profile {...this.props}
                             isOwner={!this.props.match.params.userId}
                             profile={this.props.profile}

                             status={this.props.status}
                             updateStatus={this.props.updateStatus}
                             savePhoto={this.props.savePhoto}
                    />
                </div>
               )
          }
}



let mapStateToProps = (state) => {
    //console.log("mapStateToProps Profile ")
    return ({
    profile: state.postPage.profile,
    status: state.postPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)