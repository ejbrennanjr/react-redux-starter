import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as friendActions from '../../actions/friendActions.js';
import FriendForm from './FriendForm';
import toastr from 'toastr';


class ManageFriendPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            friend: Object.assign({}, props.friend),
            errors: {},
            saving: false
        };

        this.updateFriendState = this.updateFriendState.bind(this);
        this.saveFriend = this.saveFriend.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.friend.id != nextProps.friend.id) {
            // necessary to populate form when existing friend is loaded directly
            this.setState({friend: Object.assign({}, nextProps.friend)});
        }
    }

    updateFriendState(event) {
        const field = event.target.name;
        let friend = Object.assign({}, this.state.friend);
        friend[field] = event.target.value;
        return this.setState({friend: friend});
    }

    saveFriend(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveFriend(this.state.friend)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});                
            });

    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Friend saved!');
        this.context.router.push('/friends');
    }

    render() {
        return (
            <FriendForm allCategories={this.props.categories}
                        onChange={this.updateFriendState}
                        onSave={this.saveFriend}
                        friend={this.state.friend} 
                        errors={this.state.errors} 
                        saving={this.state.saving}
            />
        );
    }
}

ManageFriendPage.propTypes = {
    friend: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// Make Router available at this.context.router
ManageFriendPage.contextTypes = {
    router: PropTypes.object
};

function getFriendById(friends, id) {
    const friend = friends.filter(friend => friend.id == id);
    if(friend.length) return friend[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    
    const friendId = ownProps.params.id; // from path '/friend/:id'
    
    let friend = {
        id: '',
        name: '',
        category: ''
    };

    if(friendId && state.friends.length > 0) {
        friend = getFriendById(state.friends, friendId);
    }

    const categoriesFormattedForDropdown = state.categories.map(category => {
        return {
            value: category.id,
            text: category.value
        };
    });

    return {
        friend: friend, 
        categories: categoriesFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(friendActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFriendPage);

