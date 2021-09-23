import React from 'react';
import './App.css';
import Cards from "./Cards";

let arrOfCars = [
    {car: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', title: 'Fox'}
    , {car: 'https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', title: 'Zebra'},
    {car:"https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: 'Squirrel'},
    {car:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: 'Lion'},
    {car:'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' ,title: 'Leopard'}

]

function App() {

    return (
        <div className="body">
            <div className={'container'}>
                {arrOfCars.map((el,index)=>{
                   return <Cards key={index} name={el.title} car={el.car}/>
                })}
            </div>
        </div>
    );
}

export default App;
