$(document).ready(function() {
	$("#pro-list").hide();
	$("#f-web").hide();
	$("#s-web").hide();
	$("#b-web").hide();
	$("#c-page").hide();
	$("#s-page").hide();
	
	$("#port-page").click(function() {
		$("#pro-list").fadeIn();
		$("#mine").slideUp();
		$("#contact").show();
		$("#c-page").hide();
		$("#f-line").show();
		$("#s-page").hide();
	})
	
	$("#home").click(function() {
		$("#mine").fadeIn();
		$("#pro-list").slideUp();
		$("#f-web").hide();
		$("#s-web").hide();
		$("#b-web").hide();
		$("#contact").fadeIn();
		$("#c-page").hide();
		$("#f-line").show();
		$("#s-page").slideUp();
	})
	
	$("#contact-page").click(function() {
		$("#c-page").fadeIn();
		$("#mine").hide();
		$("#pro-list").hide();
		$("#f-web").hide();
		$("#s-web").hide();
		$("#b-web").hide();
		$("#contact").hide();
		$("#f-line").hide();
		$("#s-page").hide();
	})
	
	$("#skills-page").click(function() {
		$("#s-page").show();
		$("#c-page").hide();
		$("#mine").hide();
		$("#pro-list").slideUp();
		$("#f-web").hide();
		$("#s-web").hide();
		$("#b-web").hide();
		$("#contact").hide();
		$("#f-line").hide();
		$("#f-line").show();
		$("#contact").fadeIn();
		
	})
	
	$("body").delegate("#d-f-web", "click", function() {
		$("#get-p1").html($("#f-web").fadeIn());
		$("#s-web").hide();
		$("#b-web").hide();
	})
	
	$("body").delegate("#d-s-web", "click", function() {
		$("#get-p2").html($("#s-web").fadeIn());
		$("#f-web").hide();
		$("#b-web").hide();
		
	})
	
	$("body").delegate("#d-b-web", "click", function() {
		$("#get-p3").html($("#b-web").fadeIn());
		$("#f-web").hide();
		$("#s-web").hide();
	})
})