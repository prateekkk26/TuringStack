import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styles from './pagination.module.css'

const Pagination = () => {
	return (
		<div className={styles.navigation}>
			<FaAngleLeft className={styles.icon} />
			<p>Page 1 of 56</p>
			<FaAngleRight className={styles.icon} />
		</div>
	)
}

export default Pagination