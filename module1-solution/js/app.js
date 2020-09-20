(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    function LunchCheckController($scope) {
        $scope.stringSnackList = "";
        $scope.message = "";

        $scope.check = function () {
            var splitList = SplitAndCleanSnackListString($scope.stringSnackList);
            
            $scope.message = GetMessageForQuantity(splitList.length)
            //alert(splitList.length);
        };

    };


    //select correct message
    function GetMessageForQuantity(qnt) {
        if(qnt < 1) {
            return "Please enter data first.";
        }
        else if (qnt <= 3) {
            return "Enjoy!";
        }
        else {
            return "Too much!";
        }
    }

    //break string into array and clean empty items.
    function SplitAndCleanSnackListString(stringOfSnacks) {
        console.log(stringOfSnacks);

        var returnList = stringOfSnacks.split(',');

        var i = 0;
        var value;

        while(i < returnList.length) {

            value = returnList[i];

            if(value.length === 0 || !value.trim()) {
                returnList.splice(i,1);
            }
            else {
                i++;
            }
        }

        return returnList;
}

})();