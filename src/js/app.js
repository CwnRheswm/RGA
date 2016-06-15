var rga = angular.module('rga', []);

rga.controller('MST3KController', function MST3KController($scope){
	$scope.exhibits = [
		{
			id: "ten",
			image: "assets/exhibit-season0.png",
			snippet: "Season 0 KTMA"
		}, {
			id: "eleven",
			image: "assets/exhibit-golden-years.png",
			snippet: "Comedy Central The Golden Years"
		}, {
			id: "twelve",
			image: "assets/exhibit-sam.png",
			snippet: "Sci-Fi, Crow's voice, & Ram Chips"
		}
	];
	$scope.toggle = false;
});