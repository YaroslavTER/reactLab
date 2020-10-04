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

	/* 
		The second argument needs to perform `useEffect` only if
		one of the array items have been changed.

		To perform `useEffect` only for one render, you
		have to pass empty array. It means that your effect
		does not depends on any value from the array and don't
		needs to be re-rednerred.

		The other approaches to avoid frequent component update
		(https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often).
	*/

	return (
		<div>{isOnline}</div>
	);
}
