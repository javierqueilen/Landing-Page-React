import React from "react"
const Cards = (props) =>{
    return (
                <div className="card">
                        <img src={props.image1} classNameName="img-fluid" alt=""/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>        
    )
}

export default Cards;