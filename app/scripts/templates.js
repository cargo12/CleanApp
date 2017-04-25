angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components.html","<div class=\"pageBanner-sm\">\r\n  <div class=\"grid\">\r\n    <div class=\"row bannerBgImage\">\r\n      <h1>BonsaiUI Components</h1>\r\n      <h2>Dozens of reusable components built to provide dropdowns, input groups, navigation, alerts, and more. And with a highly organized code structue that makes our components much lighter than Bootstrap!</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"grid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-9sm\">\r\n      <div class=\"row\">\r\n        <h1>SaSS Grid System</h1>\r\n        <p>In its most basic terms, a grid system is a structure comprising a series of horizontal and vertical lines which intersect and are then used to arrange content. In even more basic terms (which make it easier to understand!) a grid system is a way of providing a system that designers can work with to structure and present content and imagery in a much more readable, manageable way.</p>\r\n        <p>Ours is built with Sass and is easily customizable in the variable.scss</p>\r\n      </div>\r\n      <div class=\"gridDemo\">\r\n        <div class=\"row\">\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n          <div class=\"col-1xs\">\r\n            <p>col-1</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6xs\">\r\n            <p>col-6</p>\r\n          </div>\r\n          <div class=\"col-4xs\">\r\n            <p>col-4</p>\r\n          </div>\r\n          <div class=\"col-2xs\">\r\n            <p>col-2</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6xs col-8lg\">\r\n            <p>col-8</p>\r\n          </div>\r\n          <div class=\"col-6xs col-4lg\">\r\n            <p>col-4</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-4xs\">\r\n            <p>col-4</p>\r\n          </div>\r\n          <div class=\"col-4xs\">\r\n            <p>col-4</p>\r\n          </div>\r\n          <div class=\"col-4xs\">\r\n            <p>col-4</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12xs\">\r\n            <p>col-12</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3sm\">3</div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("docs.html","<div class=\"grid-fw\">\r\n  <div class=\"row\">\r\n 	<h1>BonsaiApp- Clean Version</h1>\r\n    <p>The Clean Version contains only a grid system, and basic Nav so you can develop your own app without the use of Bonsai-UI</p>\r\n  </div>\r\n  <div class=\"gridDemo\">\r\n    <div class=\"row\">\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n      <div class=\"col-1xs\"><p>col-1</p></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-6xs\"><p>col-6</p></div>\r\n      <div class=\"col-4xs\"><p>col-4</p></div>\r\n      <div class=\"col-2xs\"><p>col-2</p></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-6xs col-8lg\"><p>col-8</p></div>\r\n      <div class=\"col-6xs col-4lg\"><p>col-4</p></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4xs\"><p>col-4</p></div>\r\n      <div class=\"col-4xs\"><p>col-4</p></div>\r\n      <div class=\"col-4xs\"><p>col-4</p></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12xs\"><p>col-12</p></div>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("features.html","<div class=\"grid-fw\">\r\n  <h1>Coming Soon</h1>\r\n</div>");
$templateCache.put("main.html","<div class=\"flexCon shade\">\r\n <div class=\"grid\">\r\n   <div class=\"row\">\r\n     <div class=\"col-12xs col-6sm col-7md col-6lg\"> <img src=\"../img/logoLarge.png\" class=\"responsive-img\"> </div>\r\n     <div class=\"col-12xs col-6sm col-4md col-6lg\">\r\n       <div  class=\"bonsaiIntro\">\r\n         <div  class=\"bonsaiIntroContent\">\r\n           <h1>BonsaiApp</h1>\r\n           <h2>Develop with ease, &amp; peace of mind.</h2>\r\n           <p>A Zen-like Angular Modular BaseApp with a Modern, &amp; Elegant UI built with HTML 5, &amp; SCSS for Rapid Application Development.</p>\r\n           <p>This<span class=\"seedFeature\"> Seed Edition</span> contains only a <span class=\"seedFeature\">grid system</span>, and <span class=\"seedFeature\">basic navigation</span> styles so you can develop your own Angular app without the use of Bonsai-UI</p>\r\n           <button class=\"btn-solid\">Seed Edition</button> \r\n           <button class=\"btn-outlined\">Start your App today!</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("newView.html","<div class=\"grid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12sm center-content\">\r\n      <h1>This is a Semi-Blank Template for Page BonsaiApp</h1>\r\n      <p>It contains only a short clip from <a href=\"http://www.adultswim.com/videos/metalocalypse/\">Metaloclypse</a> that simply decribes what is on this page.</p>\r\n      <video controls>\r\n        <source src=\"../video/nothing.mp4\" type=\"video/mp4\">\r\n        Your browser does not support HTML5 video.\r\n      </video>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("philosophy.html","<div class=\"grid-fw\">\r\n  <h1>About</h1>\r\n</div>");
$templateCache.put("soon.html","<div class=\"flexCon shade\">\r\n  <div class=\"grid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12xs col-6sm col-7md col-6lg\"> <img src=\"../img/logoLarge.png\" class=\"responsive-img\"> </div>\r\n      <div class=\"col-12xs col-6sm col-4md col-6lg\">\r\n        <div  class=\"bonsaiIntro\">\r\n          <div  class=\"bonsaiIntroContent\">\r\n            <h1>Oops! This is empbaressing</h1>\r\n            <h2>BonsaiApp is still in Development and not everything is finihed yet..</h2>\r\n            <h2>Comeback later for updates.</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");}]);