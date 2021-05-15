import React, { Component } from 'react'

export default class Active extends Component {
    constructor(props){
        super()
        this.state = {
            data: []
        }

    }
    componentDidMount(){
        var arr =[]
        this.props.data.map((elm)=> {
            if(elm.chek === 0){
                arr.push(elm)
               this.setState({data: arr})

            }

        })
    }
    render() {
        return (
            <div className="row">
                {console.log(this.props)}
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
                        <button  className="btn">
                            Add
                        </button>
                    </div>
                    {this.state.data.map((elm , index)=>{
                    return(

                        <div className='inplabel' key={index}>

                            <input  onClick={()=>this.update(elm.id , elm.chek)} type="checkbox" />
                            <label for="vehicle1">{elm.items}</label><br></br>
                        </div>

                    )
                })}
            </div>
        )
    }
}