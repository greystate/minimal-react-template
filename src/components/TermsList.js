import React from 'react'

function TermsList({ terms }) {
	return (
		<dl>
			{ terms.map(item => <TermItem item={item} />) }
		</dl>
	)
}

function TermItem({ item }) {
	return (
		<>
			<dt>{item.name}</dt>
			<dd>{item.definition}</dd>
		</>
	)
}

export default TermsList
