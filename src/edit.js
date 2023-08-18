
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

/**only load for posts */
import './style-editor-custom-title.css';
import { useSelect } from '@wordpress/data';

export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps();

	
	const category = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute('categories');
	});

	const type_post = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute('type');
	});

	console.log(type_post);

	let css_class = 'wp-block-title';
	
	if(type_post=="post"){

	/**only works with post
	 * category id es hardcode
	 *  */ 

		switch(category[0]){
			case 3:
			css_class = "wp-block-title_national";
			break;

			case 4:
			css_class = "wp-block-title_pets";	
			break;

			case 5: 
			css_class = "wp-block-title_sports";
			break;

			case 6:
			css_class = "wp-block-title_entertainment";
			break;
			
			case 7:
			css_class = "wp-block-title_technology";	
			break;
			
			
		
			
			default:
				css_class = "wp-block-title";

		}
	}


	return (
		<div {...blockProps}>

			<div className={css_class}>

				<RichText
					tagName="h3"
					value={ attributes.title }
					allowedFormats={ [ 'core/bold', 'core/italic',] }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder="Ingrese el título"
				/>

           </div>

            <RichText
				tagName="p"
				value={ attributes.description }
				allowedFormats={ [] }
				onChange={ ( description ) => setAttributes( { description } ) }
				placeholder="Ingrese la descripción"
			/>

		</div>	

		/*
		<p { ...useBlockProps() }>
			{ __( 'Clarosportsvc – hello from the editor!', 'clarosportsvc' ) }
		</p>
		*/
	);
}
