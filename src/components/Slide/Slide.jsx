import React from 'react'
import { BiDotsVertical } from "react-icons/bi";
import styles from './slide.module.css'

const Slide = () => {
	return (
		<div className={styles.slide}>
			<div className={styles.container}>
				<BiDotsVertical className={styles.icon} />
			</div>
		</div>
	)
}

export default Slide