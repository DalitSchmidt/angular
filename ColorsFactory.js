app.factory('ColorsFactory', function( APIColorsFactory, LocalStorageColorsFactory ) {
	return {
        create: function ( color ) {
            LocalStorageColorsFactory.addItem( color )
            return APIColorsFactory
        }
    }
})