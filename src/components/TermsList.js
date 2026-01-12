import React from 'react'

function TermsList({ terms }) {
	return (
		<dl>
			{ terms.map(({name, definition}) => <TermItem name={name} definition={definition} />) }
		</dl>
	)
}

function TermItem({ name, definition }) {
	return (
		<>
			<dt>{name}</dt>
			<dd>{definition}</dd>
		</>
	)
}

export default TermsList
