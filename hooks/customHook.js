import React, {useState, useEffect} from 'react';

function FriendStatus({friend: id}) {
	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		function handleFriendStatus(status) {
			setIsOnline(status);
		}

		ChatAPI.subscribeToFriendStatus(id, handleFriendStatus);
		return () => {
			ChatAPI.unsubscribeFromFriendStatus(id, handleFriendStatus);
		}
	})

	return isOnline;
}
