<!DOCTYPE html>
<html>
	<head>
		<title>Invoice</title>
		<link rel="stylesheet" href="app.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	</head>
	<body>
		<div class="container-fluid invoice-builder">

			<h1>Invoice Builder</h1>
			<p><em>Complite the form and click Update Preview button bellow to Preview the generated file on the iframe. Click Download button to download</em></p>
		
			<div class="row">
				<div class="col-sm-6 loc_form">

					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for="invoice-number" class="control-label">Invoice Number</label>
								<input required class="form-control" id="invoice-number" placeholder="Invoic Number"  type="text" tabindex="2">
								<input id="date"  type="hidden" value="<?php echo  date("Y-m-d");?>">
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for="invoice-for" class="control-label">Invoice For</label>
								<input required class="form-control" id="invoice-for" placeholder="Invoic for"  type="text" value="Load lD: 278147" tabindex="2">
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for="pay-terms" class="control-label">Payment Terms</label>
								<input required class="form-control" id="pay-terms" placeholder="Payment Terms"  type="text" value="S558 COD" tabindex="2">
							</div>
						</div>
					</div>
					<h4><b>Bill To:</b></h4>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="bname" class="control-label">Name</label>
								<input required class="form-control" id="bname" placeholder="Bill To Name" value="HAULMATCH.COM" type="text" tabindex="2">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label for="baddress" class="control-label">Address</label>
								<input required class="form-control" id="baddress" placeholder="Address"  type="text" value="6 Neshaminy Inteplex, Suite 310 Trevorse, PA 19053" tabindex="2">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="bemail" class="control-label">Email</label>
								<input required class="form-control" id="bemail" placeholder="Email"  type="text" value="ryarosh@haulmatch.com" tabindex="2">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label for="bphone" class="control-label">Phone</label>
								<input required class="form-control" id="bphone" placeholder="Phone"  type="text" value="2156604004209" tabindex="2">
							</div>
						</div>
					</div>

					<hr>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<button id="invoice_preview_btn" type="button" class="btn btn-primary btn-block" tabindex="9">Update preview</button>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group text-right">
								<button id="invoice_download_btn" type="button" class="btn btn-default btn-xs btn-block" tabindex="10">Download</button>
							</div>
						</div>
					</div>

				</div>

				<div class="col-sm-6">
					<iframe id="pdf_preview" type="application/pdf" src=""></iframe>
				</div>

			</div>
		</div>
		<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>		
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js"></script>
		<script type="text/javascript" src="app.js"></script>
</body>
</html>