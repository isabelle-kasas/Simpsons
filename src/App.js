import React from 'react';
import Navbar from './component/Navbar'
import QuoteForm from './component/QuoteForm';
import QuoteList from './component/QuoteList'
import Axios from 'axios'

const quotes = {
  character: 'Marge Simpson',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
  quote: 'I\'m sleeping in the bath tub.'
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote : quotes 
    }
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote(){
    Axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data =>{
      console.log(data)
      this.setState({
        quote : data[0]
      })
    })
  }
  render(){
    return (
      <div className="App" >
        <Navbar />
        <QuoteForm />
        <div>
          <button type="button" onClick={this.getQuote}>Génération</button>
          <h1>{this.state.quote.character}</h1>
          <p>"{this.state.quote.quote}"</p>
          <img src={this.state.quote.image} />
        </div>
        <QuoteList />
      </div>
    );
  }
}

export default App;
