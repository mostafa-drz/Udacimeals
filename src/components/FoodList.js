import React,{Component} from 'react'


function trim(str){
    return str.length>16 ? str.slice(0,16)+"..." : str
}

class FoodList extends Component{
    render(){
        if(this.props.food.length===0){
            return <p>Your search has 0 results</p>
        }
        return(
          <ul className='food-list'>
            {
                food.map((item) => (
                    <li onClick={() => this.props.onSelect(item)} key={item.label}>
                        <h3>{trim(item.label)}</h3>
                        <img src={item.image} alt={item.label}/>
                        <div>{Math.floor(item.calories)} Calories</div>
                        <div>{item.source}</div>
                    </li>
                ))
            }
          </ul>
        )
    }
}