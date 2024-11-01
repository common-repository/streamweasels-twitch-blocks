import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	BaseControl,
	PanelBody,
	TextControl,
	FormToggle,
} from '@wordpress/components';

registerBlockType( 'streamweasels/streamweasels-twitch-embed', {
	title: __( 'StreamWeasels Twitch Embed', 'streamweasels-blocks' ),
	description: __(
		'Embed a stream from Twitch, just enter a Twitch channel name.',
		'streamweasels-blocks'
	),
	category: 'streamweasels',
	attributes: {
		channel: { type: 'string' },
		autoplay: { type: 'boolean' },
	},
	edit: ( { attributes, setAttributes, className } ) => {
		const { channel, autoplay } = attributes;

		return [
			<InspectorControls key="1">
				<PanelBody
					title={ __( 'Stream Settings', 'streamweasels-blocks' ) }
					initialOpen={ true }
				>
					<BaseControl
						id="swtb-autoplay"
						label={ __( 'Autoplay', 'streamweasels-blocks' ) }
					>
						<FormToggle
							checked={ autoplay }
							onChange={ () =>
								setAttributes( { autoplay: ! autoplay } )
							}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>,
			<div className={ className } key="2">
				<TextControl
					type="text"
					name="channel"
					label={ __( 'Twitch Channel', 'streamweasels-blocks' ) }
					placeholder={ __( 'lirik', 'streamweasels-blocks' ) }
					value={ channel }
					onChange={ ( content ) =>
						setAttributes( { channel: content } )
					}
				/>
			</div>,
		];
	},
	save: ( { attributes, className } ) => {
		const { channel, autoplay } = attributes;

		return (
			<div className={ className }>
				<iframe
					src={
						'https://player.twitch.tv/?channel=' +
						channel +
						'&parent=' +
						window.location.hostname +
						'&autoplay=' +
						autoplay
					}
					title={ __( 'Twitch Embed', 'streamweasels-blocks' ) }
					frameBorder="0"
					allowFullScreen=""
					height="450"
					width="100%"
				></iframe>
			</div>
		);
	},
} );
