import Reactotron from 'reactotron-react-js'
import sagaPlugin from 'reactotron-redux-saga'
import { reactotronRedux } from "reactotron-redux";

Reactotron
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin()) // <-- sweet