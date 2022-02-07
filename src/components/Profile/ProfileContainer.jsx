import React from 'react'
import s from "./Profile.module.css"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 12938
        }
        this.props.getUserProfile(userId)
        //this.props.getStatus(userId)

    }

    render() {
        return (
                <div className={s.content}>
                    <Profile {...this.props}
                             profile={this.props.profile}

                             status={this.props.status}
                             updateStatus={this.props.updateStatus}
                    />
                </div>
               )
          }
}



let mapStateToProps = (state) => ({

    profile: state.postPage.profile,
    status: state.postPage.status,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)