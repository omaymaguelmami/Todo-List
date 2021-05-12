import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>#todo</h1>
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col col-lg-2">
            <a href='#'>All</a>
            </div>
					<div className="col col-lg-2">
            <a href='#'>Active</a>
            </div>
					<div className="col col-lg-2">
            <a href='#'>Completed</a>
          </div>
				</div>
			</div>
			<div className="row">
        <div className='col-6'>
				<input id='form' type="text" placeholder="add details" />
        </div>
        <div className='col-4'>
				<button className="btn">Add</button>

        </div>
			</div>
		</div>
	);
}

export default App;
