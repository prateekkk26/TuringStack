import React from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import Month from '../Month/Month'
import months from '../../data/months'
import styles from './calender.module.css'

const Calender = () => {
	return (
		<div className={styles.calender}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1 className={styles.flexItem}>Nov&nbsp;2019</h1>
					<div className={`${styles.flexItem} ${styles.iconContainer}`}>
						<FaChevronCircleLeft className={`${styles.flexItem} ${styles.icon}`} />
						<FaChevronCircleRight className={`${styles.flexItem} ${styles.icon}`} />
					</div>
					<div className={styles.flexItem}>
						<select>
						{
							months.map((month, key) => {
								return <option key={key} value={month.month}>{month.month}</option>
							})
						}
					</select>
					</div>
				</div>
				<Month />
			</div>
			<div className={styles.images}>
				<img 
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dl-YFClQW_CtpVqpFpKf5PCTH-yu7gIa1Q&usqp=CAU" 
					alt="leave-1"
					className={styles.img1} 
				/>
				<img 
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzPTz78l-VrDITDlvMED7i8tJ9JkIOt6dPA&usqp=CAU"					
					alt="leave-2"
					className={styles.img2}
				/>
			</div>
		</div>
	)
}

export default Calender