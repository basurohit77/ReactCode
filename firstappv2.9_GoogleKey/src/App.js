import React, { useState} from "react";
import './App.css';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';


function App() {
  //item = [{tittle: "value",content: "value",}, {tittle: "value",content: "value",}]
  const [item, setItem] = useState([]); 

  const addNote = (datanote) => {  // datanote = { tittle: "value",content: "value", }
    setItem((preval) => {
      console.log(" addNote called.......")
      console.log(datanote);
      return [...preval, datanote];
    });
  };

  const onDeleteNote = (id) => {
    setItem((preval) => 
      preval.filter((currentdata, index) => {
        return (index !== id);
      }) 
    );
  };

  return (
    <>
      <Header />
      <CreateNote passnote={addNote}/>
      { item.map((val, index) => {
          return (
            <Note 
                key={index}
                id={index}
                tittle={val.tittle}
                content={val.content}
                deletenote={onDeleteNote}
            />  
          );
        })
      };
      <Footer/>
    </>
  );
}

export default App;
