app.controller('MainController', ['$scope', 'LocalStorageColorsFactory', 'APIColorsFactory', function( $scope, LocalStorageColorsFactory, APIColorsFactory ) {
    $scope.newColor = {
        mode: 'manual',
        name: null,
        hex: '#eee'
    }

    function resetNewColor() {
        $scope.newColor = {}
        $scope.newColor.name = null
        $scope.newColor.hex = null
    }

    LocalStorageColorsFactory.init()
    $scope.colors = LocalStorageColorsFactory.getList()

    $scope.addNewColor = function( e, valid ) {
        e.preventDefault()

        if ( valid ) {
            if ( $scope.newColor.mode == 'server' ) {
                APIColorsFactory.searchColor( $scope.newColor.name ).then( res => {
                    if ( res.status == 204 ) {
                        alert(`Color ${$scope.newColor.name} not found`)
                    } else  {
                        let color = res.data
                        $scope.colors = LocalStorageColorsFactory.addItem( color ).getList()                    }
                })
            } else {
                $scope.colors = LocalStorageColorsFactory.addItem( $scope.newColor ).getList()
            }
            resetNewColor()
        }

        return false
    }

    $scope.removeColor = function() {
        $scope.colors = LocalStorageColorsFactory.removeByProperty( 'name', $scope.newColor.name ).getList()
        resetNewColor()
    }

    $scope.showColor = function( color ) {
        alert(`Your color is ${color.name}`)
    }

    $scope.removeByIndex = function( index ) {
        $scope.colors = LocalStorageColorsFactory.removeByIndex( index ).getList()
        resetNewColor()
    }
}])