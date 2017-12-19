import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const FriendForm = ({friend, allCategories, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Friend</h1>
            <TextInput
                name="name"
                label="Name"
                value={friend.name}
                onChange={onChange}
                error={errors.title} />
            <SelectInput
                name="categoryId"
                label="Category"
                value={friend.categoryId}
                defaultOption="Select Category"
                options={allCategories}
                onChange={onChange}
                error={errors.categoryId} />
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>                              
    );
};

FriendForm.propTypes = {
    friend: PropTypes.object.isRequired,
    allCategories: PropTypes.array,
    onSave: PropTypes.func.isRequired, 
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default FriendForm;

