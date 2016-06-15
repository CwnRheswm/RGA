var rga = angular.module('rga', []);

rga.controller('MST3KController', function MST3KController($scope){
	$scope.exhibits = [
		{
			id: "ten",
			image: "assets/Layer 10.png",
			snippet: "Season 0 KTMA"
		}, {
			id: "eleven",
			image: "assets/Layer 11.png",
			snippet: "Comedy Central The Golden Years"
		}, {
			id: "twelve",
			image: "assets/Layer 12.png",
			snippet: "Sci-Fi, Crow's voice, & Ram Chips"
		}
	];
});