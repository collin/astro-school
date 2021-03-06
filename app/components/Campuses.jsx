import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusCard from './CampusCard';

const Campuses = (props) => {
  const { campuses } = props;
  return (
    <div id="content">
      <header className="page_header">
        <h1 className="page_title">Campuses</h1>
        <div className="page_controls">
          <Link to="/campuses/new" className="btn add_btn add_campus_button">Add a new Campus</Link>
        </div>
      </header>
      <div className="campus_list">
        { campuses.map(campus => <CampusCard key={campus.id} campus={campus} />) }
      </div>
    </div>
  );
};

const mapState = ({ campuses }) => ({ campuses });

export default connect(mapState)(Campuses);
