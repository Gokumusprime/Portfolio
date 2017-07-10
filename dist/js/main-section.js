// main-section.js *** JS for the main section of the page.
// Create app for flip cards
var module=angular.module("flip",[]);module.controller("flipCtrl",["$scope",function(e){}]);
// Set flip card timer initial value globally
var flipTimer=1e3;document.addEventListener("DOMContentLoaded",function(e){
// Function to stagger time for flip card array
function n(e){setTimeout(function(){t[e].className+=" isFlipped",t[e].classList.remove("flipped")},flipTimer),flipTimer+=100}for(var t=document.getElementsByClassName("card"),i=0;i<t.length;i++)n(i)}),$(document).ready(function(){
// Mobile flip card turn functionality for back to front
$(".face.back .close").click(function(){$(this).parent().parent().removeClass("flipped")}),
// Mobile flip card turn functionality for front to back
$(".face.front .turn").click(function(){$(this).parent().parent().addClass("flipped")})});