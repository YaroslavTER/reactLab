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
	}, [id])//only resubscribe if id changes

	return (
		<div>{isOnline}</div>
	);
}
