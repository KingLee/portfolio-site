/********************
** Global Variables
********************/

var mq = jQuery('#js-mediaquery-reference')[0],
    mqSupport = true,
    prevDevice = '',
    device = '',
    activeClass = 'is-active';

/********************
** Custom Functions
********************/

//Function to reset any styles that may have been changed on screen resize
function resetStyles()
{
}

/********************
** Event Listeners
********************/

/********************
** Window Resize Manager
** (based on: http://seesparkbox.com/demos/css-content-check/index.html)
********************/

//Create an event checker function that grabs the current value of the after pseudo class of the #mediaquery <div>
function deviceCheck()
{
  if (mqSupport) {
    prevDevice = device;
    device = window.getComputedStyle(mq,':after').getPropertyValue('content').replace(/"/g,'');
    resetStyles();
  } else {
    device = 'desktop';
  }
}

/********************
** jQuery Window Load
********************/



//Add notes here.
$( window ).resize(function() {
    var projectWrapperHeight = $( window ).height() - $(".header-wrapper").height();
 $( ".body-container" ).height(projectWrapperHeight);
});




jQuery(window).load(function()
{
});

/********************
** jQuery DOM Ready
********************/

jQuery(document).ready(function()
{
  //Check if the browser supports media queries
  if (!Modernizr.mq('only all')) {
    mqSupport = false;
  }



 //Add notes here.
  var projectWrapperHeight = $(window).height() - $(".header-wrapper").height();
 $( ".body-container" ).height(projectWrapperHeight);




  //If the browser supports media queries
  if (mqSupport) {
    //Set up event listeners tied to media queries
    mq.addEventListener('webkitTransitionEnd', deviceCheck, true);
    mq.addEventListener('MSTransitionEnd', deviceCheck, true);
    mq.addEventListener('oTransitionEnd', deviceCheck, true);
    mq.addEventListener('transitionend', deviceCheck, true);
  }

  //Check for the device on initial load
  deviceCheck();
});