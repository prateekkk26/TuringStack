import React from 'react'
import styles from './eventbox.module.css'

import {eventList1} from '../../data/eventList1'
import {eventList2} from '../../data/eventList2'
import EventItem from '../EventItem/EventItem.jsx'

const EventBox = () => {
	return (
		<div className={styles.eventBox}>
			<div className={styles.container}>
				<h2 className={styles.dates}>1 November :</h2><br />
				<div className={styles.eventContainer}>
					{
						eventList1.map(event => {
							return <EventItem key={event.id} event={event} />
						})
					}
				</div>
				<h2 className={styles.dates}>2 November :</h2>
				<div className={styles.eventContainer}>
					{
						eventList2.map(event => {
							return <EventItem key={event.id} event={event} />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default EventBox