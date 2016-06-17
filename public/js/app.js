var rga = angular.module('rga', []);

rga.controller('MST3KController', function MST3KController($scope, $sce){
	$scope.exhibits = [
		{
			id: "ten",
			image: "assets/exhibit-season0.png",
			snippet: "Season 0 KTMA",
			video: "http://youtube.com/embed/PX48Mlxa4gs"
		}, {
			id: "eleven",
			image: "assets/exhibit-golden-years.png",
			snippet: "Comedy Central The Golden Years",
			video: "http://youtube.com/embed/fypyFkTO8x0"
		}, {
			id: "twelve",
			image: "assets/exhibit-sam.png",
			snippet: "Sci-Fi, Crow's voice, & Ram Chips",
			video: "http://youtube.com/embed/0sL2Qws6nII"
		}
	];
	$scope.toggle = false;
});

//angular.module('filters-module', [])
rga.filter('trustAsResourceUrl', ['$sce', function($sce) {
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	};
}]);
