import React from 'react';
import VideoListItem from './video_list_item';

// The video list can be functional rather than class-based
const VideoList = (props) => {
	
	// avoid using for-loops
	// use built-in map iterator instead
	const videoItems = props.videos.map( (video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} 
			/>
		);
	});

	return (
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	);
};

export default VideoList;