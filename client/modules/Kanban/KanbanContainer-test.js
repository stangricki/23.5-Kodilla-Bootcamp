import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions';

import Kanban from './Kanban';

const mapStateToProps = state => ({
  lanes: state.lanes,
  });
  
const mapDispatchToProps = {
  createLane,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lanes);