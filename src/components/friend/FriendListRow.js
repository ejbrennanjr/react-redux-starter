import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const FriendListRow = ({friend}) => {
    return (
        <tr>
            <td><Link to={'/friend/' + friend.id}>{friend.name}</Link></td>
            <td>{friend.categoryId}</td>
        </tr>
    );
};

FriendListRow.propTypes = {
    friend: PropTypes.object.isRequired
};

export default FriendListRow;