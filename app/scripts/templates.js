angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("alerts.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n        <li><a href=\"/docs\">Quick Introduction</a></li>\r\n        <li><a href=\"#\">Getting Started</a></li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"/ui\" class=\"heading\">Bonsai UI</a>\r\n          <ul class=\"submenu\">\r\n            <li><a class=\"active\">Alerts</a></li>\r\n            <li><a>Badges</a></li>\r\n            <li><a>Breadcrumbs</a></li>\r\n            <li><a>Buttons</a></li>\r\n            <li><a>Button Groups</a></li>\r\n            <li><a>Cards</a></li>\r\n            <li><a>Carousel</a></li>\r\n            <li><a>Collapse</a></li>\r\n            <li><a>Dropdowns</a></li>\r\n            <li><a>Forms</a></li>\r\n            <li><a>Inputs</a></li>\r\n            <li><a>Page Banners</a></li>\r\n            <li><a>List Groups</a></li>\r\n            <li><a>Modals</a></li>\r\n            <li><a>Navbars</a></li>\r\n            <li><a>Sidebars</a></li>\r\n            <li><a>Pillbars</a></li>\r\n            <li><a>Pagnation</a></li>\r\n            <li><a>Popovers</a></li>\r\n            <li><a>Progress</a></li>\r\n            <li><a>Tooltips</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is Bonsai UI?</a></li>\r\n        <li><a href=\"#\">What make it unique?</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#two\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\">\r\n    <section class=\"pageBanner-md\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Alerts &amp; Notifications</h1>\r\n          <h2>Alerts provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"how\" class=\"row\">\r\n        <h1>Examples.</h1>\r\n        <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <div class=\"alert\" role=\"alert\"> This is a default unstyled alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n		<div class=\"alert-primary\" role=\"alert\"> This is a primary alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-secondary\" role=\"alert\"> This is a secondary alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-success\" role=\"alert\"> This is a success alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n		<div class=\"alert-danger\" role=\"alert\"> This is a danger alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-warning\" role=\"alert\"> This is a warning alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-info\" role=\"alert\"> This is a info alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-light\" role=\"alert\"> This is a light alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-dark\" role=\"alert\"> This is a dark alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n      </section>\r\n    </div>\r\n  </article>\r\n</div>\r\n");
$templateCache.put("badges.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n        <li><a href=\"/docs\">Quick Introduction</a></li>\r\n        <li><a href=\"#\" class=\"heading\">Getting Started</a></li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"/ui\">Bonsai UI</a>\r\n          <ul class=\"submenu\">\r\n            <li><a>Alerts</a></li>\r\n            <li><a>Badges</a></li>\r\n            <li><a>Breadcrumbs</a></li>\r\n            <li><a>Buttons</a></li>\r\n            <li><a>Button Groups</a></li>\r\n            <li><a>Cards</a></li>\r\n            <li><a>Carousel</a></li>\r\n            <li><a>Collapse</a></li>\r\n            <li><a>Dropdowns</a></li>\r\n            <li><a>Forms</a></li>\r\n            <li><a>Inputs</a></li>\r\n            <li><a>Page Banners</a></li>\r\n            <li><a>List Groups</a></li>\r\n            <li><a>Modals</a></li>\r\n            <li><a>Navbars</a></li>\r\n            <li><a>Sidebars</a></li>\r\n            <li><a>Pillbars</a></li>\r\n            <li><a>Pagnation</a></li>\r\n            <li><a>Popovers</a></li>\r\n            <li><a>Progress</a></li>\r\n            <li><a>Tooltips</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is Bonsai UI?</a></li>\r\n        <li><a href=\"#\">What make it unique?</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#two\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\">\r\n    <section class=\"pageBanner-md\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Alerts &amp; Notifications</h1>\r\n          <h2>Alerts provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"how\" class=\"row\">\r\n        <h1>Examples.</h1>\r\n        <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <h1>Example heading <span class=\"badge\">New</span></h1>\r\n        <h2>Example heading <span class=\"badge-primary\">New</span></h2>\r\n        <h3>Example heading <span class=\"badge-secondary\">New</span></h3>\r\n      </section>\r\n    </div>\r\n  </article>\r\n</div>\r\n");
$templateCache.put("docs.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n        <li><a class=\"heading\" href=\"#\">Quick Introduction</a></li>\r\n        <li><a href=\"/started\">Getting Started</a></li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"/ui\">Bonsai UI</a></li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is BonsaiApp?</a></li>\r\n        <li><a href=\"#\">Philosophy</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#two\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\"> \r\n    <section class=\"pageBanner-md gradient-blue\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Quick Introduction</h1>\r\n          <h2>Get to know BonsaiApp!</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"whatis\" class=\"row\">\r\n        <h1>What is BonsaiApp?</h1>\r\n        <p>BonsaiApp is a Zen-like Angular Modular BaseApp with a Modern, &amp; Elegant UI built with HTML 5,\r\n        &amp; SCSS for Rapid Application Development. The Seed Edition contains a bare minimum Angular baseApp that utilizes\r\n        only the BonsaiUI Grid System, Angular Routing, and a highly organizied folder sturcture. All the things\r\n        you need to quickly get started builing your Angular application.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <h1>Philosophy</h1>\r\n        <p>Framesworks have been a part of developers, and designers arsenal of tools for a while now, and it\'s \r\n        no surprise that they are used by millions of developers around the world to get help with jump starting\r\n        their app. But there seems to be a consitant fundemntal flaw with todays Modern Frameworks. Massive Bloat!\r\n        This is increased further after people start writting thier own code ontop of these frameworks while creating thier\r\n        apps, and websites. BonasiApp minimizes bloat with highly organized tag structure utilizing HTML 5 and SCSS to its fullest \r\n		potential.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Familiarity</h1>\r\n        <p>While creating BonsaiApp we didn\'t want to fully recrate the wheel. If it\'s not broke dont fix it, right? While all frameworks \r\n		have their own style of labeling tags. We wanted to make sure you didn\'t have to </p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Variable Design System</h1>\r\n	    <p>Creating themes has never been easier. A premade and searchable SCSS file with every variable precisely named for \r\n	    complete control over your entires apps look and feel through one file. If you want to use BonsaiApps base theme you can\r\n		just download it and start programing. Want to create your own look and feel, we encourage your style everything right out of \r\n	    the variables file itslef. No need for an overwritting theme file or coutless css reset files. Minimize the bloat, and style\r\n		the app your own way and make it yours.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Requirements</h1>\r\n        <p>GIT, NPM, and BOWER are required to use create an app with BonsaiApp. BonsaiApp is made with beginers in mind, but a\r\n		basic knowledge of Angular is a plus. Design and App making Tutorials will be coming soon. </p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Why Angular?</h1>\r\n        <p>Why not Angular 2, or 4. Well even with the current progress of technologies......</p>\r\n      </section>\r\n    </div>\r\n  </article>\r\n</div>");
$templateCache.put("main.html","<div class=\"flexCon shade\">\r\n  <div class=\"grid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12xs col-6sm col-7md col-6lg\"> <img src=\"../img/logoLarge.png\" class=\"responsive-img\" alt=\"BonsaiUI Logo\"> </div>\r\n      <div class=\"col-12xs col-6sm col-5md col-6lg\">\r\n        <div  class=\"bonsaiIntro\">\r\n          <div  class=\"bonsaiIntroContent\">\r\n            <h1>BonsaiApp</h1>\r\n            <h2>Develop with ease, &amp; peace of mind.</h2>\r\n            <p>A Zen-like Angular Modular BaseApp with a Modern, &amp; Elegant UI built with HTML 5, &amp; SCSS for Rapid Application Development.</p>\r\n            <p>This<span class=\"seedFeature\"> Seed Edition</span> contains only a <span class=\"seedFeature\">grid system</span>, and <span class=\"seedFeature\">basic navigation</span> styles so you can develop your own Angular app without the use of Bonsai-UI</p>\r\n            <button class=\"btn-solid\">Seed Edition</button>\r\n            <button class=\"btn-outlined\">Start your App today!</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"fixed-bottom\">\r\n  <div class=\"flt-left\">Copyright, MIT License</div>\r\n  <div class=\"flt-right\">Created by: <a href=\"http://www.digitalreligion.net\">Digital Religion</a></div>\r\n</footer>");
$templateCache.put("newView.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n        <li><a href=\"#\">Quick Introduction</a></li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"#\">The UI</a></li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n        <li><a ng-click=\"gotoBottom()\">Go to bottom</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is BonsssaiApp?</a></li>\r\n        <li><a href=\"#\">Philosophy</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#two\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\"> \r\n    <section class=\"pageBanner-sm\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Documentation</h1>\r\n          <h2>Get to know BonsaiApp!</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"whatis\" class=\"row\">\r\n        <h1>What is BonsaiApp?</h1>\r\n        <p>BonsaiApp is a Zen-like Angular Modular BaseApp with a Modern, &amp; Elegant UI built with HTML 5,\r\n        &amp; SCSS for Rapid Application Development. The Seed Edition is a bare minimum baseApp that utilizes\r\n        only the BonsaiUI Grid System, Angular Routing, and a highly organizied folder sturcture. All the things\r\n        you need to quickly get started builing your Angular application.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <h1>Philosophy</h1>\r\n        <p>Framesworks have been a part of developers, and designers arsenal of tools for a while now, and it\'s \r\n        no surprise that they are used by millions of developers around the world to get help with jump starting\r\n        their app. But there seems to be a consitant fundemntal flaw with todays Modern Frameworks. Massive Bloat!\r\n        This is increased further after people start writting code ontop of these frameworks while creating thier\r\n        apps, and websites.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Familiarity</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Variable Design System</h1>\r\n	    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Requirements</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Why Angular?</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Support</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <a id=\"bottom\"></a> You\'re at the bottom!\r\n    </div>\r\n  </article>\r\n</div>");
$templateCache.put("soon.html","<div class=\"flexCon shade\">\r\n  <div class=\"grid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12xs col-6sm col-7md col-6lg\"> <img src=\"../img/logoLarge.png\" class=\"responsive-img\"> </div>\r\n      <div class=\"col-12xs col-6sm col-4md col-6lg\">\r\n        <div  class=\"bonsaiIntro\">\r\n          <div  class=\"bonsaiIntroContent\">\r\n            <h1>Oops! This is empbaressing</h1>\r\n            <h2>BonsaiApp is still in Development and not everything is finihed yet..</h2>\r\n            <h2>Comeback later for updates.</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("started.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n       <li><a href=\"/docs\">Quick Introduction</a></li>\r\n       <li><a href=\"#\" class=\"heading\">Getting Started</a>\r\n          <ul class=\"submenu\">\r\n            <li><a>Download</a></li>\r\n            <li><a>Initiate</a></li>\r\n            <li><a>Source</a></li>\r\n            <li><a>Compatability</a></li>\r\n            <li><a>Build Tools</a></li>\r\n            <li><a>Accessibility</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"/ui\">Bonsai UI</a></li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is BonsaiApp?</a></li>\r\n        <li><a href=\"#\">Philosophy</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\"> \r\n    <section class=\"pageBanner-md\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Getting Started</h1>\r\n          <h2>Get to know BonsaiApp!</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"whatis\" class=\"row\">\r\n        <h1>What is BonsaiApp?</h1>\r\n        <p>BonsaiApp is a Zen-like Angular Modular BaseApp with a Modern, &amp; Elegant UI built with HTML 5,\r\n        &amp; SCSS for Rapid Application Development. The Seed Edition is a bare minimum baseApp that utilizes\r\n        only the BonsaiUI Grid System, Angular Routing, and a highly organizied folder sturcture. All the things\r\n        you need to quickly get started builing your Angular application.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <h1>Philosophy</h1>\r\n        <p>Framesworks have been a part of developers, and designers arsenal of tools for a while now, and it\'s \r\n        no surprise that they are used by millions of developers around the world to get help with jump starting\r\n        their app. But there seems to be a consitant fundemntal flaw with todays Modern Frameworks. Massive Bloat!\r\n        This is increased further after people start writting code ontop of these frameworks while creating thier\r\n        apps, and websites.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Familiarity</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Variable Design System</h1>\r\n	    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Requirements</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Why Angular?</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n    </div>\r\n  </article>\r\n</div>");
$templateCache.put("ui.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n       <li><a href=\"/docs\">Quick Introduction</a></li>\r\n       <li><a href=\"#\">Getting Started</a></li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"/ui\" class=\"heading\">Bonsai UI</a>\r\n		  <ul class=\"submenu\">\r\n            <li><a href=\"/alerts\">Alerts</a></li>\r\n            <li><a>Badges</a></li>\r\n            <li><a>Breadcrumbs</a></li>\r\n            <li><a href=\"/buttons\">Buttons</a></li>\r\n            <li><a>Button Groups</a></li>\r\n            <li><a>Cards</a></li>\r\n			<li><a>Carousel</a></li>\r\n            <li><a>Collapse</a></li>\r\n            <li><a>Dropdowns</a></li>\r\n            <li><a>Forms</a></li>\r\n            <li><a>Inputs</a></li>\r\n            <li><a>Page Banners</a></li>\r\n            <li><a>List Groups</a></li>\r\n			<li><a>Modals</a></li>\r\n			<li><a>Navbars</a></li>\r\n			<li><a>Sidebars</a></li>\r\n			<li><a>Pillbars</a></li>\r\n			<li><a>Pagnation</a></li>\r\n			<li><a>Popovers</a></li>\r\n			<li><a>Progress</a></li>\r\n			<li><a>Tooltips</a></li>\r\n          </ul>  \r\n		</li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is Bonsai UI?</a></li>\r\n        <li><a href=\"#\">What make it unique?</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#two\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\"> \r\n    <section class=\"pageBanner-md\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Bonsai UI</h1>\r\n          <h2>Design with simplicity.</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"whatis\" class=\"row\">\r\n        <h1>What is Bonsai UI.</h1>\r\n        <p>BonsaiApp is a Zen-like Angular Modular BaseApp with a Modern, &amp; Elegant UI built with HTML 5,\r\n        &amp; SCSS for Rapid Application Development. The Seed Edition is a bare minimum baseApp that utilizes\r\n        only the BonsaiUI Grid System, Angular Routing, and a highly organizied folder sturcture. All the things\r\n        you need to quickly get started builing your Angular application.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <h1>What make Bonsai UI unique?</h1>\r\n        <p>Framesworks have been a part of developers, and designers arsenal of tools for a while now, and it\'s \r\n        no surprise that they are used by millions of developers around the world to get help with jump starting\r\n        their app. But there seems to be a consitant fundemntal flaw with todays Modern Frameworks. Massive Bloat!\r\n        This is increased further after people start writting code ontop of these frameworks while creating thier\r\n        apps, and websites.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Variable Design System</h1>\r\n	    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n      <section class=\"row\">\r\n        <h1>Requirements</h1>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n        industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap \r\n        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the \r\n        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \r\n        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </section>\r\n    </div>\r\n  </article>\r\n</div>");
$templateCache.put("documentation/buttons.html","<div id=\"pageWrapper\">\r\n  <aside id=\"leftSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"leftbar\">\r\n        <li><a href=\"/docs\">Quick Introduction</a></li>\r\n        <li><a href=\"#\" class=\"heading\">Getting Started</a></li>\r\n        <li><a href=\"#\">Overview</a></li>\r\n        <li><a href=\"/ui\">Bonsai UI</a>\r\n          <ul class=\"submenu\">\r\n            <li><a>Alerts</a></li>\r\n            <li><a>Badges</a></li>\r\n            <li><a>Breadcrumbs</a></li>\r\n            <li><a>Buttons</a></li>\r\n            <li><a>Button Groups</a></li>\r\n            <li><a>Cards</a></li>\r\n            <li><a>Carousel</a></li>\r\n            <li><a>Collapse</a></li>\r\n            <li><a>Dropdowns</a></li>\r\n            <li><a>Forms</a></li>\r\n            <li><a>Inputs</a></li>\r\n            <li><a>Page Banners</a></li>\r\n            <li><a>List Groups</a></li>\r\n            <li><a>Modals</a></li>\r\n            <li><a>Navbars</a></li>\r\n            <li><a>Sidebars</a></li>\r\n            <li><a>Pillbars</a></li>\r\n            <li><a>Pagnation</a></li>\r\n            <li><a>Popovers</a></li>\r\n            <li><a>Progress</a></li>\r\n            <li><a>Tooltips</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"#\">Globals</a></li>\r\n        <li><a href=\"#\">Layout</a></li>\r\n        <li><a href=\"#\">Components</a></li>\r\n        <li><a href=\"#\">Utilties</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <aside id=\"rightSidebar\">\r\n    <nav class=\"sidebar\">\r\n      <ul class=\"rightbar\">\r\n        <li><a href=\"#\">What is Bonsai UI?</a></li>\r\n        <li><a href=\"#\">What make it unique?</a></li>\r\n        <li><a href=\"#\">Familiarity</a></li>\r\n        <li><a href=\"#\">Variable Design System</a></li>\r\n        <li><a href=\"#\">Requirements</a></li>\r\n        <li><a href=\"#\">Why Angular?</a></li>\r\n        <li><a href=\"#two\">Support</a></li>\r\n      </ul>\r\n    </nav>\r\n  </aside>\r\n  <article class=\"pagecontent\">\r\n    <section class=\"pageBanner-md\">\r\n      <div class=\"grid-fw\">\r\n        <div class=\"row\">\r\n          <h1>Alerts &amp; Notifications</h1>\r\n          <h2>Alerts provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"grid-fw\">\r\n      <section id=\"how\" class=\"row\">\r\n        <h1>Examples.</h1>\r\n        <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>\r\n      </section>\r\n      <section id=\"philos\" class=\"row\">\r\n        <div class=\"alert\" role=\"alert\"> This is a default unstyled alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n		<div class=\"alert-primary\" role=\"alert\"> This is a primary alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-secondary\" role=\"alert\"> This is a secondary alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-success\" role=\"alert\"> This is a success alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n		<div class=\"alert-danger\" role=\"alert\"> This is a danger alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-warning\" role=\"alert\"> This is a warning alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-info\" role=\"alert\"> This is a info alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-light\" role=\"alert\"> This is a light alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n        <div class=\"alert-dark\" role=\"alert\"> This is a dark alert with <a href=\"#\">an example link</a>. Give it a click if you like. </div>\r\n      </section>\r\n    </div>\r\n  </article>\r\n</div>\r\n");}]);