=== Simple Gutenberg Google Fonts ===
Contributors: acosmin 
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.txt
Requires at least: 4.9.8
Tested up to: 4.9.8
Stable tag: 1.0.1
Requires PHP: 5.4
Tags: fonts, Gutenberg, Google Fonts, gutenberg fonts, font

== Description ==
Simple Google Fonts adds the posibility to change default fonts to Google fonts from within the new WordPress v5.0 editor, codename Gutenberg. You'll need Gutenberg installed and activated in order to use this plugin.

### What it does?
Simple Google Fonts adds the posibility to change default fonts to Google fonts from within the new WordPress v5.0 editor, codename Gutenberg. You'll need Gutenberg installed and activated in order to use this plugin.

#### Things to know:
* Read the `After activation` section for some info on how to use it.
* Supported post types: **posts** and **pages**
* You can set Google fonts for individual posts and pages or globally.
* Globally means that the styles from a selected post will apply to the entire website. It will also apply the styles in the Editor, for new or old posts (that don't have any styles applied to them).
* The post needs to be published for you to be able to use its styles globally. If for some reason you change that post to draft mode and the global mode is enabled on it, the option will reset and you'll need to enable it again after you publish the post.
* It's safe to say that if you don't have an Internet connection, Google fonts will not display (unless you have them installed on your system).

#### To do list:
* Add support for `word-spacing` for both `body` and `headings`
* Auto add `700` and `700i` weights if the font supports those variants.

== Installation ==

=== From within WordPress ===

1. Visit 'Plugins > Add New'.
2. Search for `Simple Google Fonts`.
3. Activate `Simple Google Fonts` from your Plugins page.
4. Go to "after activation" below.

=== Manually ===

1. Upload the `simple-google-fonts` folder to the `/wp-content/plugins/` directory
2. Activate the `Simple Google Fonts` plugin through the 'Plugins' menu in WordPress
3. Go to "after activation" below.

=== After activation ===

1. Edit/add a post in Gutenberg mode
2. When you're editing the post, you'll see an icon, `A`,  in the top-right corner of your screen (if you hover over it, it will say `Simple Google Fonts`). From there you will be able to change font families and styles for `body` and `headings`. If the `A` icond doesn't show up, you can click on the 3 dots, top-right corner, and in the `Plugins` sub-section, click on `Simple Google Fonts`. If it doesn't show up in that menu, then you're either not editing a post/page or the plugin isn't activated.
3. You're done.