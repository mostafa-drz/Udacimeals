import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import {addRecipe,removeFromCalendar} from "../actions"
class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

function mapStateToProps({calendar,food}){
  const dayOrder=['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return{
    calendar:dayOrder.map((day) =>({
      day,
      meals:Object.keys(calendar[day]).reduce((meals,meal) => {
        meals[meal]=calendar[day][meal]? food[calendar[day][meal]] : null
        return meals
      },{})
    }))
  }
}
export default connect(mapStateToProps)(App);
