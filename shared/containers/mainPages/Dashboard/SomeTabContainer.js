import { connect } from 'react-redux';

import * as SessionActions from '../../../actions/SessionActions.js';

import SomeTab from '../../../components/mainPages/Dashboard/SomeTab.js';

export default connect(null, { ...SessionActions })(SomeTab);
