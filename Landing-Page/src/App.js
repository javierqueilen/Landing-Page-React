import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Cards from './Card';
function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="container-fluid">
                <Jumbotron></Jumbotron>
                    <div className="row">
                      <div className="col-md-3">
                        <Cards image1="https://images.unsplash.com/photo-1542370773-ae6d54f6748d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></Cards>
                      </div>  
                      <div className="col-md-3">
                        <Cards image1="https://images.unsplash.com/photo-1529946179074-87642f6204d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards image1="https://images.unsplash.com/photo-1600615614799-2cd68cb75705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards image1="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80"></Cards>
                      </div>
                    </div>
       </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
