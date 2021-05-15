import axios from 'axios';
import React, { Component } from 'react'
  
export default class All extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : '',
        }
        this.update= this.update.bind(this)
    }
    addDetail(){
        axios.post('http://localhost:3000/api/insert' , {
            items : this.state.value
        }).then((response)=> {
            if(response.status===201){
                window.location.reload()
            }

        })
    }
   
   
    update(id, chek){
        axios.patch('http://localhost:3000/api/update/'+ id , {
            chek : !chek
        } ).then((response)=>{
            console.log(response)
        })
    }


    render() {
        return (
                <div className="row">
                    {console.log(this.state)}
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
                
                {this.props.data.map((elm , index)=>{
                    return(
                        
                        <div className='inplabel' key={index}>
                    
                            <input  onClick={()=>this.update(elm.id , elm.chek)} type="checkbox" />
                            <label for="vehicle1">{elm.items}</label><br></br>
                        </div>
                        
                    )
                })}
    
            </div>

        );
    }
}