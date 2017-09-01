import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { writeCampusName, writeCampusImageUrl } from '../reducers/newCampusEntry';

const CampusForm = (props) => {
  const { changeName, changeUrl, handleSubmit } = props;
  const newCampusEntry = props.newCampusEntry || {};

  return (
    <form className="new_entry_form new_campus_form" onSubmit={handleSubmit}>
      <div className="form_group">
        <label htmlFor="campus_name_input">Name</label>
        <input
          id="campus_name_input"
          name="name"
          type="text"
          value={newCampusEntry.name}
          onChange={changeName} />
      </div>
      <div className="form_group">
        <label htmlFor="campus_image_input">Image URL</label>
        <input
          id="campus_image_input"
          name="image"
          type="text"
          value={newCampusEntry.imageUrl}
          onChange={changeUrl} />
      </div>
      <input className="btn btn_submit" type="submit" value="Create" />
    </form>
  );
};

const mapState = ({ newCampusEntry }) => ({ newCampusEntry });
const mapDispatch = dispatch => ({
  changeName: (evt) => {
    evt.preventDefault();
    dispatch(writeCampusName(evt.target.value));
  },
  changeUrl: (evt) => {
    evt.preventDefault();
    dispatch(writeCampusImageUrl(evt.target.value));
  }
});

export default withRouter(connect(mapState, mapDispatch)(CampusForm));
