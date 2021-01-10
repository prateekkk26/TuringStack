import React from 'react'
import styles from './events.module.css'

import EventHeader from '../EventHeader/EventHeader.jsx'
import EventBox from '../EventBox/EventBox.jsx'
import Pagination from '../Pagination/Pagination.jsx'

const Events = () => {
	return (
		<div className={styles.events}>
			<div className={styles.container}>
				<EventHeader />
				<EventBox />
				<Pagination />
			</div>
		</div>
	)
}

export default Events