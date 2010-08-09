(function( $ ) {
	
$.widget( "cgnjs.edible", {
	_create: function() {
		var self = this;
		this.element.bind( "click.edible", function( event ) {
			self.element.hide();
			self.input
				.val( $.trim( self.element.text() ) )
				.show()
				.focus();
		});
		self.input = $( "<input/>" )
			.insertAfter( self.element )
			.hide()
			.blur(function() {
				$( this ).hide();
				self.element.show();
			})
			.keyup(function( event ) {
				self.element.text( this.value );
			});
	}
});

})( jQuery );
