import React, { useState } from 'react';
import './App.css';

function App() {
	const [item, setItem] = useState('');
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setList([...list, item]);
		setItem('');
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>To-Do App</h1>
				<input
					className='todoInput'
					type='text'
					placeholder='Please enter a todo item'
					value={item}
					onChange={(e) => setItem(e.target.value)}
				/>
				<button type='submit' onClick={handleSubmit} className='todoBtn'>
					Submit
				</button>
				<ul>
					{list.map((todo, index) => {
						return <li key={index}>{todo}</li>;
					})}
				</ul>
			</header>
		</div>
	);
}

export default App;
