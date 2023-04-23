import React from 'react';
import jsPDF from 'jspdf';
import './App.css';
import Ticket from './Ticket';

function App() {

  const generatePDF = () => {
    const doc: any = new jsPDF('p', 'pt', 'a4');

    doc.html(document.querySelector('#tktContainer'), {
      callback: function (doc: any) {
        doc.save()
      }
    });
  }

  return (
    <div>
      {/* <Ticket /> */}
      <div className="formContainer">
        <div className="inputContainer">

        </div>
      </div>
      <div>
        <button onClick={generatePDF}>PDF</button>
      </div>
    </div>
  );
}

export default App;
