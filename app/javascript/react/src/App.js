import React from 'react'
import { Route, IndexRoute, Router, browserHistory} from 'react-router'
import MainContainer from './containers/MainContainer'
import GroupTile from './components/GroupTile'
import GroupFormContainer from './containers/GroupFormContainer'

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={MainContainer} />
          <Route path='/groups/new' component={GroupFormContainer}/>
          <Route path='/groups/:id' component={GroupTile}/>
        </Route>
      </Router>
    </div>
  )
}

export default App
