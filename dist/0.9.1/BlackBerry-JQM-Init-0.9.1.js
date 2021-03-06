/*
* Copyright 2012 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and 
* limitations under the License.
*/


//Blackberry 10 Configuration Settings
//Settings here are optimized to provide Blackberry 10 behaviour and feel
(function($) {
  $(document).bind("mobileinit", function(){
	$.mobile.buttonMarkup.hoverDelay = 0;

	// Use the simultaneous transitions handler for slide transitions
	$.mobile.transitionHandlers.cover = $.mobile.transitionHandlers.simultaneous;
	// Set the slide transitions's fallback to "fade"
	$.mobile.transitionFallbacks.cover = "fade";
	$.mobile.listview.prototype.options.icon = false;
	$.mobile.selectmenu.prototype.options.nativeMenu = false;
	$.mobile.fixedtoolbar.prototype.options.tapToggle = false;

  });
})(jQuery);
