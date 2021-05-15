import React, { Component } from 'react'

export default class Active extends Component {
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
            </div>
        )
    }
}
