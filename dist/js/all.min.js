// header.js *** JS for the header section of the page.

$(document).ready(function() {
    
    // Fixed header scroll animation
    $(window).scroll(function() {
        
        //Change header to fixed from relative when scrolling.  Return back to relative once back at the top.
        if ($(this).scrollTop() > 1) {
            $('.navbar-inverse').addClass("fixed-header");
        } else {
            $('.navbar-inverse').removeClass("fixed-header");
        }

    });
   
});

// main-section.js *** JS for the main section of the page.

// Create flip card app
var flipModule = angular.module('flipApp', []);
flipModule.controller('flipCtrl', ["$scope", function($scope) {}]);

// Set flip card timer initial value globally
var flipTimer = 1000;

// Set rotation icon timer initial value globally
var rotateTimer = 1000;

// Create app populate resume list skills
var listModule = angular.module('listApp', []);
listModule.controller('listCtrl', ["$scope", function($scope) {
    $scope.listItems = [
    	"HTML, HTML5, CSS, CSS3, SASS - SCSS, JavaScript, jQuery, Handlebars, Vue.js, Angular.js and Bootstrap",
		"Experience with Grunt, Gulp and Webpack for task running and code bundling",
		"ASP.NET/CSHTML editing",
		"Multiple IDE's such as Adobe Dreamweaver, Microsoft Visual Studio and Microsoft Expression",
		"Sitecore CMS",
		"SharePoint",
		"Microsoft SQL Server Management",
		"Tortoise Git, Tortoise SVN, Beanstalk, Bitbucket and TeamCity for code control",
		"Jira and Workfront to manage bugs and track time",
		"Adobe Photoshop and Adobe Illustrator",
		"Microsoft Office applications such as Access, Word, Excel and PowerPoint",
		"Access to develop, query and report off of databases",
		"Using Excel to customize formulas for report enhancement",
		"Basecamp",
		"HL7 code standards",
		"Strong understanding of databases/front end system relationships",
		"SCRUM/Agile Methodology",
		"A+ Certified"
    ];
}]);

document.addEventListener("DOMContentLoaded", function(event) {

    // Function to stagger time for flip card array
    function doSetTimeout(i) {
        setTimeout(function() {
            flippedItems[i].className += " isFlipped";
            flippedItems[i].classList.remove("flipped");
        }, flipTimer);
        flipTimer += 100;
    }

    // Array that triggers flip app as it cycles through cards
    var flippedItems = document.getElementsByClassName("card");
    for (var i = 0; i < flippedItems.length; i++) {
        doSetTimeout(i);
    }

});

$(document).ready(function() {

    // Mobile flip card turn functionality for back to front
    $(".face.back .close").click(function() {
        $(this).parent().parent().removeClass("flipped");
    });

    // Mobile flip card turn functionality for front to back
    $(".face.front .turn").click(function() {
        $(this).parent().parent().addClass("flipped");
    });

    // Trigger animate list item slide
    $(".runaway-list").click();

    // Function to stagger time for rotation icon array
    function doSetTimeout(i) {
        setTimeout(function() {
            rotationIcons[i].className += " isrotated";
        }, rotateTimer);
        rotateTimer += 100;
    }

    // Array that triggers icon rotation as it cycles through icons
    var rotationIcons = document.getElementsByClassName("code-icon");
    for (var i = 0; i < rotationIcons.length; i++) {
        doSetTimeout(i);
    }

});
