import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions';

import styles from '../Lane/Lane.css';

const Kanban = (props) => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
        notes: [],
      })}
    >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

const mapStateToProps = state => {
  return {
    lanes: state.lanes,
  }
};

const mapDispatchToProps = {
  createLane,
};

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
