declare global {
	interface Window {
		gtag?: (...args: any[]) => void
	}
}

export const sendEvent = (eventName: string, params: Record<string, any>) => {
	if (!window.gtag) return

	window.gtag('event', eventName, {
		...params,
		page_path: window.location.pathname,
	})
}
