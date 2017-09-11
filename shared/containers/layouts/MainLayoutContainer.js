import { connect } from 'react-redux';

import MainLayout from '../../components/layouts/MainLayout.js';

function mapStateToProps(state) {
    return {
        token : state.session.token || null
    };
}

export default connect(mapStateToProps)(MainLayout);
