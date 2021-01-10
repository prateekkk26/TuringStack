import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import styles from './eventitem.module.css'

const EventItem = ({event}) => {
	return (
		<div className={styles.eventItem}>
			<div className={styles.container}>
				<div style={{
					borderRight: `5px solid ${event.borderColor}`
				}} className={`${styles.flexItem} ${styles.time}`}>
					<h1>{event.t1}</h1>
					<h3>{event.t2}</h3>
				</div>
				<div className={`${styles.flexItem} ${styles.description}`}>
					<h3>{event.genre}</h3>
					<h2>{event.title}</h2>
				</div>
				<div className={styles.btn}>
					<p style={{
						backgroundColor: `${event.btnBackground}`,
						color: `${event.btnColor}`
					}}>{event.btnText}</p>
				</div>
				<h5 className={styles.flexItem}>{event.price}</h5>
				<h5 className={styles.flexItem}>{event.date}</h5>
				<div className={styles.flexItem}>
					<FaEllipsisH className={styles.middle} />
				</div>
			</div>
		</div>
	)
}

export default EventItem