import React from 'react'
import s from "./Profile.module.css"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }

        this.props.getUserProfile(userId)
    }

    render() {
        return (
                <div className={s.content}>
                    <Profile {...this.props} profile={this.props.profile} />
                </div>
               )
              }
}



let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile,} ),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)