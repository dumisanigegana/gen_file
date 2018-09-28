(function(API) {
		API.textAlign = function(txt, options, x, y) {
				options = options || {};
				// Use the options align property to specify desired text alignment

				// Get current font size
				var fontSize = this.internal.getFontSize();

				// Get page width
				var pageWidth = this.internal.pageSize.width;

				// Get the actual text's width

				var txtWidth = this.getStringUnitWidth(txt) * fontSize / this.internal.scaleFactor;

				if (options.align === "center") {

						// Calculate text's x coordinate
						x = (pageWidth - txtWidth) / 2;

				} else if (options.align === "centerAtX") { // center on X value

						x = x - (txtWidth / 2);

				} else if (options.align === "right") {

						x = x - txtWidth;
				}

				// Draw text at x,y
				this.text(txt, x, y);
		};

		API.getLineHeight = function(txt) {
				return this.internal.getLineHeight();
		};

})(jsPDF.API);

(function() {
		"use strict";

		// some variables
		var agency_logo = {src: 'data:image/png;base64,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',
						w: 800,
						h: 285
				},
				agency_ftr = 'Poweered by Truckify Contct Lekgotla Mosope at 4105283699 or ema11 us',
				agency_ftr_ln2 = 'at paulrichardsllc@gmail.com If you have any questions concerning this invoice.',
				footer = agency_ftr + "\n" + agency_ftr_ln2,

				page_size = 'a4',
				page_width = 210, // mm
				page_margin = 10, // mm
				content_width = page_width - (page_margin * 2), // available width for the content

				_y, _x, // drawing coord
				color_array, _string, lineHeight, y_correction, // some variables

				vspace = 10 // standard vertical space between elements

		;

		// some variables
		var can_display_preview = true, // if true a preview of the PDF can be displayed in the iframe,
				// this value is set to false if the browser can't display the preview
				preview_container = $('#pdf_preview'),
				update_preview_button = $('#invoice_preview_btn'),
				download_button = $('#invoice_download_btn');

		// preview can be displayed?
		if (navigator.msSaveBlob) { // older IE
				update_preview_button.prop('disabled', true);
				can_display_preview = false;
				preview_container.replaceWith(
						'<div class="no_iframe">' +
						'<div>' +
						"The preview can't be displayed" +
						'</div>' +
						'</div>'
				);
		}

		try {	
				//!pdf builder
				var createPDF = function(update_preview) {
						
						_y = page_margin; // vertical starting point

						// form data
						var invoice_number = $('#invoice-number').val(),
								invoice_for = $('#invoice-for').val(),
								pay_terms = $('#pay_terms').val(),
								bname = $('#bname').val(),
								baddress = $('#baddress').val(),
								bemail = $('#bemail').val(),
								date = $('#date').val(),
								bphone = $('#bphone').val();
						
						var pdf = new jsPDF('p', 'mm', page_size),
								text_baseline,

								// some colors:
								light_grey = 237,
								grey = 128,
								black = 0,
								white = 255;

						// Optional - set properties of the document
						pdf.setProperties({
								subject: footer,
								author: 'me',
						});

						pdf.addImage(agency_logo.src, 'PNG', 65, 5, 75,40); // values(image file, file type, x cordinant, y cordinant, width, hight) 

						// fonts initializing
						pdf.setFont("helvetica");
						pdf.setFontType("bold");

						

						pdf.rect(20, 80, 80, 45); // values(x cordinant, y cordinant, width, hight)  						 
						pdf.rect(100, 80, 80, 45); //          "                 "  
						pdf.rect(20, 125, 80, 45); //          "                 "  
						pdf.rect(100, 125, 80, 45); //          "                 "

						pdf.setFontSize(12);
						pdf.text(30, 60, 'INVOICE NUMBER: ' + invoice_number);
						pdf.text(30, 65, 'Date: ' + date );
						pdf.text(25, 90, 'INVOICE FOR: ' + invoice_for );
						pdf.text(25, 100, 'PAYMENT TERMS: ' + pay_terms );
						pdf.text(105, 90, 'BILL FOR: ');
						pdf.text(105, 100, bname);
						var baddress_lines = pdf.splitTextToSize(baddress, 70), // 70 = max line width
							_y =105,
							line_height = 5; //mm
						// pdf.text(105, 105, baddress_lines); // doesn't allows to change line spacing
						for (var i = 0; i < baddress_lines.length; i++) {
							pdf.text(105, _y, baddress_lines[i]);
							_y += line_height;
								}
						pdf.text(105, _y+5, 'EMAIL: ' + bemail );
						pdf.text(105, _y+10, 'PHONE: ' + bphone );						
						
						_y = 287;
						pdf.setFontSize(9);
						pdf.setFontType("normal");
						pdf.setTextColor(black);
						pdf.text(footer, 100, _y, 'center');

						// ****************************
						// output
						if (update_preview) {
								preview_container.attr('src', pdf.output('datauristring'));
						} else {
								pdf.save('invoice ' + invoice_number + '.pdf');
						}

				}; // end createPDF

				// !buttons
				update_preview_button.click(function() {
						createPDF(true);
				});

				$('#invoice_download_btn').click(function() {
						createPDF(false);
				});

		} catch (e) {
				console.log(e);
		}

})();