import { connect } from 'react-redux';

import * as SessionActions from '../../actions/SessionActions.js';

import LoginPage from '../../components/loginPages/LoginPage.js';

export default connect(null, { ...SessionActions })(LoginPage);
