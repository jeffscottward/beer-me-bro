(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var BMBAPP = function(){

      this.data = {
        currentScreen: 'undefined'  
      };

      this.dom = {
        screen: {
          collection: $('.screen')
        }
      };

      this.screen = function(){

        var thatData = this.data;
        var thatDom = this.dom;

        function getScreen(screenName) {
          return thatDom.screen.collection.filter( '.' + screenName );
        }

        function getCurrentScreen() {
          return thatData.currentScreen;
        }

        function updateScreenStatus(screenName) {
          thatData.currentScreen = screenName;
        }

        function clearAllScreens() {
          updateScreenStatus('undefined');
          thatDom.screen.collection.removeClass('-active-screen');
        }

        function turnOffScreen(screenName) {
          updateScreenStatus('undefined');
          getScreen(screenName).removeClass('-active-screen');
        }

        function turnOnScreen(screenName) {
          updateScreenStatus(screenName);
          getScreen(screenName).addClass('-active-screen');
        }
        
        function goToScreen(screenName){
          clearAllScreens();
          updateScreenStatus(screenName);
          turnOnScreen(screenName);
          console.log('Current Screen: ' + getCurrentScreen());
        }

        return {

          getScreen: getScreen,
          getCurrentScreen: getCurrentScreen,
          updateScreenStatus: updateScreenStatus,
          clearAllScreens: clearAllScreens,
          turnOffScreen: turnOffScreen,
          turnOnScreen: turnOnScreen,
          goToScreen: goToScreen

        };

      };

    };

    window.appInstance = new BMBAPP();

  });

})(jQuery, window, document);
