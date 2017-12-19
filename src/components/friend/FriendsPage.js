import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as friendActions from '../../actions/friendActions';
import FriendList from './FriendList';
import {browserHistory} from 'react-router';


class FriendsPage extends React.Component {

    constructor(props, context) {
        super(props, context);  
        this.redirectToAddFriendPage = this.redirectToAddFriendPage.bind(this); 
    }


    friendRow(friend, index) {
        return <div key={index}>{friend.title}</div>;
    }

    redirectToAddFriendPage() {
        browserHistory.push('/friend');
    }

    render() {
        const {friends} = this.props;

        return (
            <div>
                <h1>Friends</h1>
                <input type="submit"
                       value="Add Friend"
                       className="btn btn-primary"
                       onClick={this.redirectToAddFriendPage} 
                />
                <FriendList friends={friends} />
            </div>
        );
    }
}

FriendsPage.propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        friends: state.friends
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(friendActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage);