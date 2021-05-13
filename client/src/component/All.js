import axios from 'axios';
import React, { Component } from 'react'
  
export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : '',
            data: [],
        }
    }
    addDetail(){
        axios.post('http://localhost:3000/api/insert' , {
            items : this.state.value
        }).then((response)=> {
            console.log(response)

        })
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/get').then((response)=> {
            this.setState({
                data: response.data

            })
        })
    }
    deleteItem(){
        axios.delete(' http://localhost:3000/api/delete/' + 3).then((response)=> {
            console.log(response)
        })
        
    }
    handleCheckbox(elm){
        var arr = []
        arr.push(elm)
        console.log(elm)
        localStorage.setItem('item',arr)
        
    }


    render() {
        return (
                <div className="row">
                    <div className="col-6">
                        <input
                            id="form"
                            type="text"
                            name="addDetails"
                            placeholder="add details"
                            onChange={(e) => {
                                this.setState({value:e.target.value});
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <button onClick={()=> this.addDetail()} className="btn">
                            Add
                        </button>
                    </div>
                
                {this.state.data.map((elm , index)=>{
                    return(
                        
                        <div className='inplabel' key={index}>
                    
                            <input  onClick={()=>this.handleCheckbox(elm.items)} type="checkbox" />
                            <label for="vehicle1">{elm.items}</label><br></br>
                        </div>
                        
                    )
                })}
    
            </div>

        );
    }
}