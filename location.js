$(document).ready(function() {

	var locationData = $('#listLocation').DataTable({
		"searching": false,
		"lengthChange": false,
		"processing":true,
		"serverSide":true,
		"order":[],
		"ajax":{
			url:"location_action.php",
			type:"POST",
			data:{action:'listLocation'},
			dataType:"json"
		},
		"columnDefs":[
			{
				"targets":[0, 3, 4],
				"orderable":false,
			},
		],
		"pageLength": 10
	});

	$(document).on('click', '.update', function(){
		var locationId = $(this).attr("id");
		var action = 'getLocationDetails';
		$.ajax({
			url:'location_action.php',
			method:"POST",
			data:{locationId:locationId, action:action},
			dataType:"json",
			success:function(data){
				$('#locationModal').modal('show');
				$('#locationId').val(data.id);
				$('#location').val(data.name);
				$('#status').val(data.status);
				$('.modal-title').html("<i class='fa fa-plus'></i> Edit location");
				$('#action').val('updateDepartment');
				$('#save').val('Save');
			}
		})
	});

	$('#addLocation').click(function(){
		$('#departmentModal').modal('show');
		$('#locationForm')[0].reset();
		$('.modal-title').html("<i class='fa fa-plus'></i> add Location");
		$('#action').val('addLocation');
		$('#save').val('Save');
	});

	$(document).on('submit','#departmentForm', function(event){
		event.preventDefault();
		$('#save').attr('disabled','disabled');
		var formData = $(this).serialize();
		$.ajax({
			url:"department_action.php",
			method:"POST",
			data:formData,
			success:function(data){
				$('#departmentForm')[0].reset();
				$('#departmentModal').modal('hide');
				$('#save').attr('disabled', false);
				departmentData.ajax.reload();
			}
		})
	});

	$(document).on('click', '.delete', function(){
		var departmentId = $(this).attr("id");
		var action = "deleteDepartment";
		if(confirm("Are you sure you want to delete this record?")) {
			$.ajax({
				url:"location_action.php",
				method:"POST",
				data:{departmentId:departmentId, action:action},
				success:function(data) {
					departmentData.ajax.reload();
				}
			})
		} else {
			return false;
		}
	});

});

