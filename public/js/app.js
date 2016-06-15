var rga = angular.module('rga', []);

rga.controller('MST3KController', function MST3KController($scope){
	$scope.exhibits = [
		{
			id: "ten",
			image: "assets/exhibit-Season0.png",
			snippet: "Season 0 KTMA"
		}, {
			id: "eleven",
			image: "assets/exhibit-Golden-Years.png",
			snippet: "Comedy Central The Golden Years"
		}, {
			id: "twelve",
			image: "assets/exhibit-Sam.png",
			snippet: "Sci-Fi, Crow's voice, & Ram Chips"
		}
	];
	$scope.toggle = false;
});