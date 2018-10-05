import { HEADINGS } from './constants';
import { parseHeadingValues as parsed } from './utils';

/**
 * Creates the inline CSS styles based on the meta information it receives
 *
 * @since  1.0.0
 * @param  {Object} meta     Current post meta
 * @param  {Object} fontsObj Google Fonts object from JSON 
 * @return {Void}
 */
export default function theStyles( meta, fontsObj ) {
    const { sgf_ff_headings:ffh, sgf_ff_body:ffb } = meta;
    
    const hFont    = fontsObj[ ffh ].f;
    const bFont    = fontsObj[ ffb ].f;
    const styleTag = document.querySelector( `#${simpleGFonts[ 'style_id' ]}` );
    const hMeta    = meta.sgf_els_headings;

    styleTag.textContent = '';

    if( ffb !== 0 || ffh !== 0 ) {
        styleTag.textContent += `
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"],
                body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"] {
                    font-weight: 400 !important;
                    font-style: normal;
                }
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h1,
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h2,
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h3,
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h4,
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h5,
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h6,
                body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {
                    font-weight: 400 !important;
                    font-style: normal;
                }`;
    }

    if( ffb !== 0 ) {
        styleTag.textContent += `
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"],
            body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"],
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] *,
            body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"] *,
            body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input,
            body.gutenberg-editor-page .editor-default-block-appender__content {
                font-family: '${ bFont }', sans-serif !important;
            }`;
    }
    
    if( ffh !== 0 ) {
        styleTag.textContent += `
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h1,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h2,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h3,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h4,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h5,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h6,
            body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h1 *,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h2 *,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h3 *,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h4 *,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h5 *,
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] h6 *,
            body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input * {
                font-family: '${ hFont }', sans-serif !important;
            }`;
    }

    if( meta.sgf_wt_body !== '400' ) { // recheck default
        styleTag.textContent += `
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"],
            body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"],
            body.gutenberg-editor-page .editor-default-block-appender__content {
                font-weight: ${ meta.sgf_wt_body } !important;
            }
        `;
    }

    if( meta.sgf_lh_body !== 1.8 ) {
        styleTag.textContent += `
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"],
            body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"],
            body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] p,
            body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"] p {
                line-height: ${ meta.sgf_lh_body } !important;
            }
        `;
    }

    for( const heading of HEADINGS ) {
        const headingMeta = hMeta.find( item => item.startsWith( heading, 3 ) );
        const hParsed     = headingMeta ? parsed( headingMeta ) : false;

        if( hParsed && hParsed.wt !== '400' ) { // recheck default
            if( heading === 'h1' ) {
                styleTag.textContent += `
                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {
                        font-weight: ${ hParsed.wt } !important;
                    }
                `;
            }
            styleTag.textContent += `
                body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"] ${ heading },
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] ${ heading } {
                    font-weight: ${ hParsed.wt } !important;
                    
                }
            `;
        }

        if( hParsed && hParsed.tt !== 'none' ) {
            if( heading === 'h1' ) {
                styleTag.textContent += `
                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {
                        text-transform: ${ hParsed.tt } !important;
                    }
                `;
            }
            styleTag.textContent += `
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] ${ heading } {
                    text-transform: ${ hParsed.tt } !important;
                }
            `;
        }

        if( hParsed && hParsed.lh !== 1.4 ) {
            if( heading === 'h1' ) {
                styleTag.textContent += `
                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {
                        line-height: ${ hParsed.lh } !important;
                    }
                `;
            }
            styleTag.textContent += `
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] ${ heading } {
                    line-height: ${ hParsed.lh } !important;
                }
            `;
        }

        if( hParsed && hParsed.ls !== 0 ) {
            if( heading === 'h1' ) {
                styleTag.textContent += `
                    body.gutenberg-editor-page .editor-post-title__block .editor-post-title__input {
                        letter-spacing: ${ hParsed.ls }em !important;
                    }
                `;
            }
            styleTag.textContent += `
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] ${ heading } {
                    letter-spacing: ${ hParsed.ls }em !important;
                }
            `;
        }

        if( meta.sgf_ls_body !== 0 ) {
            styleTag.textContent += `
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"],
                body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"],
                body.gutenberg-editor-page .editor-block-list__block div[class*="wp-block-"] p,
                body.gutenberg-editor-page .editor-block-list__block div[class*="block-list__block"] p {
                    letter-spacing: ${ meta.sgf_ls_body }em !important;
                }
            `;
        }
    }
}