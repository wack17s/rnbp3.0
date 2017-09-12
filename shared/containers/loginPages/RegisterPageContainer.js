import { connect } from 'react-redux';

import * as SessionActions from '../../actions/SessionActions.js';

import RegisterPage from '../../components/loginPages/RegisterPage.js';

export default connect(null, { ...SessionActions })(RegisterPage);
