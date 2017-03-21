import React from 'react';

const VideoDetail = ( {video} ) => {

	if (!video) {
		return <div><p>Loading. Please wait ...</p></div>;
	}

	const videoId = video.id.videoId;
	//const url = 'https://www.youtube.com/embed' + videoId;
	// above is ES5 syntax; below is ES6 syntax
	const url = `https://www.youtube.com/embed/${videoId}`;
	
	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe src={url} className='embed-responsive-item'></iframe>
			</div> 
			<div className='details'>
				<h2>{video.snippet.title}</h2>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;