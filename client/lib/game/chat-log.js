ig.module('game.chat-log')

.requires()

.defines(function() {

	ChatLog = ig.Class.extend({

		// ID of element that holds all elements.
		wrapperId: 'ChatLog',

		// ID of element to hold messages.
		htmlLogId: null,

		// Maximum messages to keep in log.
		buffer: 100,

		// Width of log in pixels.
		width: null,

		// Height of log in pixels.
		height: null,

		// CSS settings for the log element.
		logCSS: {
			
			// No horizontal scrolling.
			"overflow-x": "hidden",

			// Enable vertical scrolling.
			"overflow-y": "auto",

			// Give text a drop shadow.
			"text-shadow": "0.1em 0.1em 0.2em black",

			// Font size.
			"font-size": "10pt",

			// Use width of container.
			"width": "100%",

			// Use height of container.
			"height": "100%"
		},

		// CSS settings for the log container.
		logContainerCSS: {
			
			// Add transparent background.
			"background": "url('media/black-opacity-50.png')", 

			// Round the corners.
			"border-radius": "10px",

			// Move away from corner.
			"margin": "5px",

			// Add spacing around log.
			"padding": "5px",

			// Set position bottom left.
  			"position": "absolute",
  			"bottom": "0px",
  			"left": "0px"

		},

		init: function(width, height, logId) {

			// Set width in pixels.
			this.width = width;

			// Set height in pixels.
			this.height = height;

			// Set element to hold messages.
			this.htmlLogId = logId;

			/*
			 *  Wrapper element holds everything.
			 */

			// Create wrapper element.
			$('body').append($('<div id="' + this.wrapperId + '"/>'));

			// Position the wrapper over canvas.
			$('#' + this.wrapperId).css("position", "absolute");
			$('#' + this.wrapperId).css("width", $('#canvas').width());
			$('#' + this.wrapperId).css("height", $('#canvas').height());
			$('#' + this.wrapperId).css("left", 0);
			$('#' + this.wrapperId).css("right", 0);
			$('#' + this.wrapperId).css("top", 0);
			$('#' + this.wrapperId).css("bottom", 0);
			$('#' + this.wrapperId).css("margin", "auto");

			/*
			 *  Log container holds log element.
			 *  Used for adjusting backgrounds or spacing.
			 */

			// Create a log container.
			$('#' + this.wrapperId).append($('<div id="' + this.htmlLogId + '-container"/>'));

			// Use the width/height specified in constructor.
			$('#' + this.htmlLogId + '-container').width(this.width);
			$('#' + this.htmlLogId + '-container').height(this.height);

			// Apply CSS settings to log container.
			this.applyCSS(this.logContainerCSS, '#' + this.htmlLogId + '-container');

			/*
			 *  Log element holds messages.
			 */

			// Create log HTML element.
			$('#' + this.htmlLogId + '-container').append($('<div id="' + this.htmlLogId + '"/>'));

			// Apply CSS settings to chat log.
			this.applyCSS(this.logCSS, '#' + this.htmlLogId);					
		},

		/*
		 * Applies one or more CSS settings to an element.
		 *
		 * @param  css     object    Contains CSS properties and their values.
		 * @param  element string    Name of element to alter using jQuery.
		 * @return         undefined
		 */
		applyCSS: function(css, element)
		{

			// Select element using jQuery.
			var elementToUse = $(element);

			// Get CSS settings
			for(var property in css)
			{
				// Apply property.
				elementToUse.css( property, css[property] );
			}
		},

		/*
		 * Adds a new message to the end of the log.
		 *
		 * @param  html string    HTML formatted message.
		 * @return      undefined
		 */
		push: function(html) {

			// Add new content to the log.
			$('#' + this.htmlLogId).append(html);

			// Scroll the log.
			this.scroll();
		},

		/*
		 * Scrolls the chat log to the bottom.
		 *
		 * @return undefined
		 */
		scroll: function()
		{
			// Animate the scroll.
			$('#' + this.htmlLogId).animate({scrollTop:$('#' + this.htmlLogId)[0].scrollHeight}, 1000);
		},

		/*
		 * Removes excess messages if there is more than allowed by the buffer.
		 *
		 * @return undefined
		 */
		prune: function() {

			// Get number of messages in log.
			var messageCount = $('#' + this.htmlLogId + ' > div').length;

			// Check if there are too many messages.
			if (messageCount > this.buffer) {
				// How many messages to remove.
				var removeCount = messageCount - this.buffer;

				for (var i = 0; i < removeCount; i++) {
					// Remove oldest entry.
					$('#' + this.htmlLogId + ' :first-child').remove();
				}
			}
		}

	});


})