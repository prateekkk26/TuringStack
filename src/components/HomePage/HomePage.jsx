import React from 'react'
import styles from './homepage.module.css'

import Calender from '../Calender/Calender'
import Events from '../Events/Events'

const HomePage = () => {
	return (
		<div className={styles.homepage}>
			<div className={styles.container}>
				<Calender />
				<Events />
			</div>
		</div>
	)
}

export default HomePage