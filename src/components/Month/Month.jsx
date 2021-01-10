import React, {useState} from 'react'
import styles from './month.module.css'
import Info from '../Info/Info.jsx'

const Month = () => {
	const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

	const [show1, setShow1] = useState(false);

	const [show2, setShow2] = useState(false);

	const five = {
		name: 'Corn Maze',
		price: '$10',
		date: 'November 5',
		time: '10:00 - 11:00',
		location: 'Forest Park',
		line: `This was about half an hour 
				Weather may cancel it`
	}

	const sixteen = {
		name: 'Apple Picking',
		price: '$10',
		date: 'November 10',
		time: '9:00 - 6:00',
		location: 'Eckers',
		line: `Fun for the whole family! We have a wide variety`
	}

	return (
		<div className={styles.month}>
			<div className={styles.dayOfWeek}>
			  <div>Mon</div>
			  <div>Tue</div>
			  <div>Wed</div>
			  <div>Thu</div>
			  <div>Fri</div>
			  <div>Sat</div>
			  <div>Sun</div>
			</div>

			<div className={styles.dateGrid}>
			{
				days.map((day, key) => {
					{
						if (day === 5) {
							return <div key={key} className={styles.info}>
										<button style={
											show1 ? { color: "rgb(44, 44, 84)"} : null
										} className={`${styles.cursor} ${styles.day}`} onClick={() => setShow1(!show1)} value={day}>{day}</button>
										{
											show1 ? <Info day={five} /> : null
										}
									</div>
						}else if (day === 16) {
							return <div key={key} className={styles.info}>
										<button style={
											show2 ? { color: "rgb(44, 44, 84)"} : null
										} className={`${styles.cursor} ${styles.day}`} onClick={() => setShow2(!show2)} value={day}>{day}</button>
										{
											show2 ? <Info day={sixteen} /> : null
										}
									</div>
						} else {
							return (
								<div key={key}>
									<button className={styles.day} value={day}>{day}</button>
								</div>
							)			
						}
					}
				})
			}
			</div>
		</div>
	)
}

export default Month