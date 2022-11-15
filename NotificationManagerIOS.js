import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Alert, Linking, Platform } from 'react-native'
import React from 'react'

class NotificationManager extends React.Component {
	configure = () => {
		PushNotification.configure({
			onRegister: function (param) {
				console.log("DeviceTOKEN:", param.token);
			},
				onNotification: function (notification) {
					notification.finish(PushNotificationIOS.FetchResult.NoData);
			},
			popInitialNotification: false,
			permissions: {
				alert: true,
				badge: true,
				sound: true,
			},
		})
	}

	_buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
		return {
			id: id,
			autoCancel: true,
			largeIcon: options.largeIcon || "ic_launcher",
			smallIcon: options.smallIcon || "ic_launcher",
			bigText: message || '',
			subText: title || '',
			vibrate: options.vibrate || false,
			vibration: options.vibration || 300,
			priority: options.priority || "high",
			importance: options.importance || "high",
			data: data
		}
	}

	_buildIOSNotification = (id, title, message, data = {}, options = {}) => {
		return {
			alertAction: options.alertAction || "view",
			category: options.category || "",
			userInfo: {
				id: id,
				item: data
			}
		}
	}

	showNotification = (id, title, message, data = {}, options = {}) => {
		PushNotification.localNotification({
			/* Android Only Properties */
			...this._buildAndroidNotification(id, title, message, data, options),

			/* IOS Only Properties */
			...this._buildIOSNotification(id, title, message, data, options),

			/* Android and IOS Properties */
			title: title || "",
			message: message || "",
			playSound: options.playSound || false,
			soundName: options.soundName || 'default',
			userInteraction: false
		})
	}

	cancelAllLocalNotification = () => {
		if (Platform.OS === 'ios') {
			PushNotification.removeAllDeliveredNotifications()
		} else {
			PushNotification.cancelAllLocalNotifications()
		}
	}

	unregister = () => {
		PushNotification.unregister()
	}
}
export const NotificationManagerIOS = new NotificationManager()