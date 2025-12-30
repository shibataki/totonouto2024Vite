import { useEffect, useRef } from 'react'
//import { sendEvent } from '../lib/ga'

export const useSectionView = (sectionId: string, sectionName: string) => {
	const ref = useRef<HTMLDivElement | null>(null)
	//const sent = useRef(false)

	useEffect(() => {
		if (!ref.current) {
			console.log('ref が null')
			return
		}

		let sent = false

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log(
						'Intersection:',
						entry.isIntersecting,
						entry.intersectionRatio
					)

					if (entry.isIntersecting && !sent) {
						sent = true

						console.log('section_view 発火:', sectionId)

						window.gtag?.('event', 'section_view', {
							section_id: sectionId,
							section_name: sectionName,
						})
					}
				})
			},
			{ threshold: 0.5 }
		)

		observer.observe(ref.current)

		return () => observer.disconnect()
	}, [sectionId, sectionName])

	return ref
}
