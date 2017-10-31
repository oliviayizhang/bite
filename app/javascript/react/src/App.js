import React from 'react'
import { Route, IndexRoute, Router, browserHistory} from 'react-router'
import MainContainer from './containers/MainContainer'
import GroupShowContainer from './components/GroupShowContainer'
import GroupFormContainer from './containers/GroupFormContainer'

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={MainContainer} />
          <Route path='/groups/new' component={GroupFormContainer}/>
          <Route path='/groups/:id' component={GroupShowContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App
