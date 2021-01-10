import React from 'react'
import styles from './info.module.css'

const Info = ({day}) => {
	return (
		<div className={styles.info}>
			<div id={styles.triangleUp}></div>
			<div className={styles.container}>
				<div className={styles.flexItem}>
					<p>{day.name}</p>
					<p>{day.price}</p>
				</div>
				<div className={styles.flexItem}>
					<p><span>Date:</span>&nbsp; &nbsp;{day.date}</p>
					<p><span>Time:</span>&nbsp; &nbsp;{day.time}</p>
					<p><span>Location:</span>&nbsp; &nbsp;{day.location}</p>
					<p>{day.line}</p>
				</div>
			</div>
		</div>
	)
}

export default Info