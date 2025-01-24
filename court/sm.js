"id": "POCSO/JULY     /2024/0332",
"district_name": "Salem",
"pol_stat": "Karumandurai",
"year_dat": null,
"fir_no": "166",
"bank_details": null,
"status": "Y",
"created_by": "1123",
"created_date": "2025-01-23 12:44:45.485965",
"updated_date": "2025-01-23 16:36:14.719477",
"updated_by": "1123",
"sent_to": null,
"date_of_fir": "2020-04-07 00:00:00",
"child_name": null,
"child_age": "2004-11-25",
"age": "19",
"name_parent": "ELUMALAI",
"account_number": "9876543210",
"bank_name": "Bank B",
"branch_name": "Branch 2",
"account_holder_name": "John Doe Backup",
"ifsc_code": "XYZ789",
"fir_attach": "FIR_ATTACH",
"fir_attach_mimetype": null,
"fir_attach_filename": null,
"complaint_name": "2020-06-27",
"charge_sheet_yes_no": "Yes",
"charge_sheet_date": "2020-08-28",
"willingness_compensation": "No",
"complaint_copy": "COMPLAINT_COPY",
"complaint_copy_mimetype": null,
"complaint_copy_filename": null,
"who_applying": null,
"who_name": null,
"who_relationship": null,
"who_date": null,
"request_status": "S",
"child_gender": "Female",
"date_requisition_medical_examination": "2020-07-18",
"date_of_medical_examination_victim": "2020-07-18",
"date_of_interim": "2020-07-18",
"name_medical_institution": "SALEM GHKMC",
"complaint_made": "Self"



document.getElementById('P73_DISTRICT_NAME_DISPLAY').textContent = event_id;
document.getElementById('P73_POL_STAT_DISPLAY').textContent = (details.event_date);
document.getElementById('P73_COMPLAINT_NAME_DISPLAY').textContent = details.event_type;
document.getElementById('P73_COMPLAINT_MADE_DISPLAY').textContent = eventPlace;
document.getElementById('P73_FIR_NO_DISPLAY').textContent = details.name_of_organization;
document.getElementById('P73_DATE_OF_FIR_DISPLAY').textContent = convertToMMDDYYYY(details.name_of_president);
document.getElementById('P73_CHILD_GENDER_DISPLAY').textContent = details.mobile_of_president;
document.getElementById('P73_CHILD_AGE_DISPLAY').textContent = convertToMMDDYYYY(details.name_of_district);
document.getElementById('P73_AGE_DISPLAY').textContent = details.name_of_taluk;
document.getElementById('P73_NAME_PARENT_DISPLAY').textContent = details.name_of_village;
document.getElementById('P73_WILLINGNESS_COMPENSATION_DISPLAY').textContent = details.pincode;
document.getElementById('P73_WHO_NAME_DISPLAY').textContent = details.participants;
document.getElementById('P73_WHO_RELATIONSHIP_DISPLAY').textContent = details.number_of_bulls;
document.getElementById('P73_WHO_DATE_DISPLAY').textContent = details.preevent_arrangements;
document.getElementById('P73_BANK_DETAILS_DISPLAY').textContent = details.arena_size;
document.getElementById('P73_ACCOUNT_HOLDER_NAME_DISPLAY').textContent = details.arena_length;
document.getElementById('P73_ACCOUNT_NUMBER_DISPLAY').textContent = details.arena_breath;
document.getElementById('P73_BANK_NAME_DISPLAY').textContent = details.bull_run_area;
document.getElementById('P73_BRANCH_NAME_DISPLAY').textContent = details.bull_arena_length;
document.getElementById('P73_IFSC_CODE_DISPLAY').textContent = details.bull_arena_breath;
document.getElementById('P73_NAME_MEDICAL_INSTITUTION_DISPLAY').textContent = details.bull_examination_area_size;
document.getElementById('P73_DATE_REQUISITION_MEDICAL_EXAMINATION_DISPLAY').textContent = details.bull_examination_length;
document.getElementById('P73_DATE_OF_MEDICAL_EXAMINATION_VICTIM_DISPLAY').textContent = details.bull_examination_breath;
document.getElementById('P73_DATE_OF_INTERIM_DISPLAY').textContent = details.bull_examination_breath;