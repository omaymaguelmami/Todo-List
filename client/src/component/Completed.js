import React, { Component } from 'react';
import axios from 'axios'

export default class Completed extends Component {
    constructor(props){
        super()
        this.state = {
            data: []
        }

    }
    componentDidMount(){
        var arr =[]
        this.props.data.map((elm)=> {
            if(elm.chek === 1){
                arr.push(elm)
               this.setState({data: arr})

            }

        })
    }

    deleteItem(id){
        axios.delete(' http://localhost:3000/api/delete/' + id).then((response)=> {
            console.log(response)
        })
        window.location.reload()
    }

    render() {
        return (
            <div className="col">
                {console.log(this.state.data , 'hello')}
                {this.state.data.map((elm)=> {
                    return(
                        <div>
                            <h1>{elm.items}</h1>
                            <button onClick={()=>this.deleteItem(elm.id)}>delete one</button>
                        </div>
                    )

                }


                )}

            <button  className="deltbtn">
            delete all
            </button>
        </div>
        )
    }
}
