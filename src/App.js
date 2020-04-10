import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {  

  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  updateInput(event){
    this.setState ({
      input: event.target.value,
    })
  }
  
  render() {

    const inputlow = this.state.input.toLowerCase()
    const list = posts
      .filter(post => post.title.toLowerCase().includes(inputlow))
      .map((post, index) =>   
        <li key={index}>
          <a href={post.url}><img src={post.image } alt={'image of '+post.title}/></a>
          <p>{ post.title }</p>
        </li>
    )          
    return (
      <div>
        <div className="filter">
          <input type="text" value={this.state.input} onChange={this.updateInput.bind(this)} placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
        {list}
        </ul>
      </div>
    )
  }
}


export default App


