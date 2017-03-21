import React from 'react';

const VideoListItem = ( {video, onVideoSelect} ) => {
	// the use of ( {video} ) => above is the same as:
	// const video = props.video;
	
	const imageUrl = video.snippet.thumbnails.default.url;
	
	
	return (
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img src={imageUrl} className='media-object' />
				</div>
				<div className='media-body'>
					<h3 className='media-heading'>{ video.snippet.title }</h3>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;