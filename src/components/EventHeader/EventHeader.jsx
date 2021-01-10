import React from 'react'
import { FaUserCircle, FaSistrix, FaAngleDoubleDown } from 'react-icons/fa'
import styles from './eventheader.module.css'

const EventHeader = () => {
	return (
		<div className={styles.eventHeader}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Local Events</h1>
					<div className={styles.search}>
						<FaSistrix className={styles.searchIcon} />
						<form>
							<input type="text" />
						</form>
					</div>
				</div>
				<div className={styles.icons}>
					<FaUserCircle className={styles.icon} />
					<FaAngleDoubleDown className={styles.icon} />
				</div>
			</div>
			<div className={styles.links}>
				<ul>
					<li>Upcoming</li>
					<li>Popular</li>
					<li>Newest</li>
				</ul>
			</div>
		</div>
	)
}

export default EventHeader