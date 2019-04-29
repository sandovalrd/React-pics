import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

//const App = () => {
class App extends React.Component{

    state={images:[]};
    // Otra manera de esperar la respuesta con el prefijo async --Promesa
    // async onSearchSumit(term){ // Cambiando a funcion fecha
    onSearchSumit = async (term) => {
        //axios.get('https://api.unsplash.com/search/photos',{
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        });
        
        // Una manera de esperar la respuesta de la api "Promesa"
        // .then((response)=>{
        //     console.log(response.data.results);
        // });

        this.setState({images:response.data.results}); // Para usar thisState cambiar funcion a fecha

    }
    
    render(){
        return ( 
            <div className="ui container" style={{ marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSumit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;