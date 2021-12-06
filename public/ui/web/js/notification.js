setInterval(function() {
    //your jQuery ajax code
  //  console.log('done');
    var formData = new FormData();
    formData.append('id', 1);
		
			 $.ajaxSetup({
			   headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			   }
			 });
 
 
			 $.ajax({
				url : '/notification',
				method : 'POST',
				data : formData,
				processData: false,  
				contentType: false, 
				success : function(data) {
					//console.log(data);
                    if(data.test_drive!=0){
                        $('#testdrive').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#test2').removeClass('d-none');
                    }if(data.service_confirm!=0){
						$('#service_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#sc1').removeClass('d-none');
						$('#si1').removeClass('d-none');
						$('#sp1').removeClass('d-none');
						$('#sco1').removeClass('d-none');

					}if(data.service_inquiry!=0){
						$('#service_inquiry').removeClass('d-none');
						$('#service_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#sc2').removeClass('d-none');
						$('#si2').removeClass('d-none');
						$('#sp2').removeClass('d-none');
						$('#sco2').removeClass('d-none');

					}if(data.bodyshop_inquiry!=0){
						$('#bodyshop_inquiry').removeClass('d-none');
						$('#bodyshop_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#bc2').removeClass('d-none');
						$('#bi2').removeClass('d-none');
						$('#bp2').removeClass('d-none');
						$('#bco2').removeClass('d-none');

					}if(data.bodyshop_confirm!=0){
						$('#bodyshop_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#bc1').removeClass('d-none');
						$('#bi1').removeClass('d-none');
						$('#bp1').removeClass('d-none');
						$('#bco1').removeClass('d-none');
						

					}if(data.workshop_inquiry!=0){
						$('#workshop_inquiry').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#wc2').removeClass('d-none');
						$('#wi2').removeClass('d-none');
						$('#wp2').removeClass('d-none');
						$('#wco2').removeClass('d-none');
						$('#workshop_confirm').removeClass('d-none');

					}if(data.workshop_confirm!=0){
						$('#workshop_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#wc1').removeClass('d-none');
						$('#wi1').removeClass('d-none');
						$('#wp1').removeClass('d-none');
						$('#wco1').removeClass('d-none');

					}if(data.autospa_inquiry!=0){
						$('#autospa_inquiry').removeClass('d-none');
						$('#autospa_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#ac2').removeClass('d-none');
						$('#ai2').removeClass('d-none');
						$('#ap2').removeClass('d-none');
						$('#aco2').removeClass('d-none');

					}if(data.autospa_confirm!=0){
						$('#autospa_confirm').removeClass('d-none');
                        $('#booking').removeClass('d-none');
						$('#ac1').removeClass('d-none');
						$('#ai1').removeClass('d-none');
						$('#ap1').removeClass('d-none');
						$('#aco1').removeClass('d-none');

					}
					if(data.vehicle_update!=0){
						
						$('#customer_show').removeClass('d-none');
						$('#customer_verify').removeClass('d-none');
					}
					if(data.pick_and_drop!=0){
						
						$('#pick_a_drop').removeClass('d-none');
					}
					if(data.new_user!=0){
						$('#customer_show').removeClass('d-none');
						$('#new_user').removeClass('d-none');
					}
					// else{
					// 	$('#booking').addClass('d-none');
					// 	$('#testdrive').addClass('d-none');
					// 	$('#service_confirm').addClass('d-none');
					// 	$('#service_inquiry').addClass('d-none');
					// 	$('#bodyshop_inquiry').addClass('d-none');
					// 	$('#bodyshop_confirm').addClass('d-none');
					// 	$('#workshop_inquiry').addClass('d-none');
					// 	$('#workshop_confirm').addClass('d-none');
					// 	$('#autospa_inquiry').addClass('d-none');
					// 	$('#autospa_confirm').addClass('d-none');

					// 	$('#ac1').addClass('d-none');
					// 	$('#ai1').addClass('d-none');
					// 	$('#ap1').addClass('d-none');
					// 	$('#aco1').addClass('d-none');

					// 	$('#ac2').addClass('d-none');
					// 	$('#ai2').addClass('d-none');
					// 	$('#ap2').addClass('d-none');
					// 	$('#aco2').addClass('d-none');

					// 	$('#wc1').addClass('d-none');
					// 	$('#wi1').addClass('d-none');
					// 	$('#wp1').addClass('d-none');
					// 	$('#wco1').addClass('d-none');

					// 	$('#wc2').addClass('d-none');
					// 	$('#wi2').addClass('d-none');
					// 	$('#wp2').addClass('d-none');
					// 	$('#wco2').addClass('d-none');

					// 	$('#bc1').addClass('d-none');
					// 	$('#bi1').addClass('d-none');
					// 	$('#bp1').addClass('d-none');
					// 	$('#bco1').addClass('d-none');

					// 	$('#bc2').addClass('d-none');
					// 	$('#bi2').addClass('d-none');
					// 	$('#bp2').addClass('d-none');
					// 	$('#bco2').addClass('d-none');

					// 	$('#sc1').addClass('d-none');
					// 	$('#si1').addClass('d-none');
					// 	$('#sp1').addClass('d-none');
					// 	$('#sco1').addClass('d-none');

					// 	$('#sc2').addClass('d-none');
					// 	$('#si2').addClass('d-none');
					// 	$('#sp2').addClass('d-none');
					// 	$('#sco2').addClass('d-none');

					// }
                   
					if(data == 'success'){
						 $.alert({
							 title: 'Success',
							 content: 'Successfully deleted',
							 type: '',
						 });
						 //row.hide();
					}
									
				}
					 
			 });
  }, 1000 * 60 * 0.1);