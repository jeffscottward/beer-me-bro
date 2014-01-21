(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var BMBAPP = function(){

      this.data = {
        currentScreen: 'undefined',  
        currentView: 'undefined'
      };

      this.dom = {
        screen: {
          collection: $('.screen'),
          view: $('.view'),
          attachListeners: function () {
            $('.beer-action').click(function(){
              window.appInstance.view().goToView('give-request');
            });
          }
        }
      };

      this.screen = function() {

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

      this.view = function() {

        var thatData = this.data;
        var thatDom = this.dom;

        function getView(viewName) {
          return thatDom.screen.view.filter( '.' + viewName );
        }

        function getCurrentView() {
          return thatData.currentView;
        }

        function updateViewStatus(viewName) {
          thatData.currentView = viewName;
        }

        function clearAllViews() {
          updateViewStatus('undefined');
          thatDom.screen.view.removeClass('-active-view');
        }

        function turnOffView(viewName) {
          updateViewStatus('undefined');
          getView(viewName).removeClass('-active-view');
        }

        function turnOnView(viewName) {
          updateViewStatus(viewName);
          getView(viewName).addClass('-active-view');
        }
        
        function goToView(viewName){
          clearAllViews();
          updateViewStatus(viewName);
          turnOnView(viewName);
          console.log('--current View: ' + getCurrentView());
        }

        return {

          getView: getView,
          getCurrentView: getCurrentView,
          updateViewStatus: updateViewStatus,
          clearAllViews: clearAllViews,
          turnOffView: turnOffView,
          turnOnView: turnOnView,
          goToView: goToView

        };

      };

    };

    window.appInstance = new BMBAPP();
    window.appInstance.dom.screen.attachListeners();
    window.appInstance.screen().goToScreen('splash');

    setTimeout(function(){
      window.appInstance.screen().goToScreen('home');
    }, 2000);

    setTimeout(function(){
      window.appInstance.screen().goToScreen('dashboard');
      window.appInstance.view().goToView('beers-tracker');
    }, 4000);
    
  });

})(jQuery, window, document);
