import React, { Component } from 'react'
import ReduxShow from './reduxFiles/reduxShow'
import ReduxSelected from './reduxFiles/reduxSelected'
import reduxStore from './reduxFiles/reduxStore'
class ReduxTab extends Component {

    render() {
      console.log(reduxStore.dispatch({
        type:""
      }))
        return (
          <div>
          <ReduxSelected />
            <ReduxShow onAddItem={()=>console.log(this)}/>

          </div>
            
        )
    }
}

export default ReduxTab