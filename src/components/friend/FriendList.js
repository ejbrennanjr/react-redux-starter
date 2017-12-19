import React, {PropTypes} from 'react';
import FriendListRow from './FriendListRow';

const FriendList = ({friends}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {friends.map(friend =>
                    <FriendListRow key={friend.id} friend={friend} />
                )}
            </tbody>
        </table>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendList;