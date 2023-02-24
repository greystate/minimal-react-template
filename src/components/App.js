import React from 'react'
import TermsList from './TermsList'

function App() {
	const terms = [
		{ name: 'HTML', definition: 'Hyper Text Markup Language' },
		{ name: 'CSS', definition: 'Cascading Style Sheets' },
		{ name: 'JS', definition: 'JavaScript' }
	]
	
	return (
		<TermsList terms={terms} />
	)
}

export default App
