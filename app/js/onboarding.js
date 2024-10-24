$(document).ready(async function() {
    //Initialize zoho creator
    await initZohoCreator();

    var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();

    if(queryParams.onboarding !== undefined){
        //Approval Screen
        loadForm("onBoarding.html");
        $('#FormOnboarding .Submit').hide();
        aprData = await fetchRecordById("Employee_Onboarding_Report", queryParams.onboarding);
        $('#FormOnboarding input, #FormOnboarding textarea, #FormOnboarding select').each(function() {
            var $this = $(this); // Cache the current element
            var id = $this.attr("id"); // Get the id once
            var parentTd = $this.parent('td'); // Get the parent <td>
        
            if ($this.is(':radio')) {
                var name = $this.attr('name');
                parentTd.html(aprData[name]);
            } 
            else if ($this.is(':checkbox')) {
                var name = $this.attr('name');
                $this.prop('checked', aprData[name]);
                $this.prop('disabled', true);
            }
            else {
                // Handle non-radio input, textarea, and select
                if ($.isPlainObject(aprData[id])) {
                    parentTd.html(aprData[id].display_value); // Use display_value if it's an object
                } else {
                    parentTd.html(aprData[id]); // Use the value directly if not an object
                }
            }
        });
        $('#FormOnboarding td[id]').each(function() {
            var $td = $(this); // Cache the current <td>
            var tdId = $td.attr("id"); // Get the ID of the <td>
            // Example of manipulating content
            if ($.isPlainObject(aprData[tdId])) {
                $td.html(aprData[tdId].display_value);
            } else {
                $td.html(aprData[tdId]);
            }
        });

        signature = await fetchZohoCreatorRecord("All_Employees", "(Email == \""+aprData['Filled_By']+"\")");
        SignID = signature[0].ID;
        SignImage = signature[0].Signature.split('=')[1];
        signUrl = "https://creator.zohopublic.com/adminzoho_mawaridfs/survey/All_Employees/"+ SignID+"/Signature/image-download/7e7r0XpU3YGmmA8ukrNUWe56Q6pgwOraT9TqGfxEUObSszqwYmrnt1qVwv1vNRWEyDCA2j5mQt4W1vHZ5TmjBOUWHfKX2mt05Vsk/"+SignImage;
        newRow = '<tr><td>Filled By: '+aprData['Filled_By']+'</td><td>Time: '+aprData['Filled_Time']+'</td><td><img height="70px" src='+signUrl+'></td></tr>';
        $('#approvalTable').append(newRow);
        if(aprData['Approval_1'] == ''){
            newRow = "<tr><td colspan=3>Approve Record <input type=checkbox id='approval_1'></td></tr>";
            $('#approvalTable').append(newRow);
            $('#approval_1').change(async function(){
                const updateData = {
                    data: {
                        "Approval_1": queryParams.CurrentUser,
                    }
                };
                updateResp = await updateZohoCreatorRecord("Employee_Onboarding_Report", queryParams.onboarding, updateData);
                location.reload();
            });

        }
        else{
            signature = await fetchZohoCreatorRecord("All_Employees", "(Email == \""+aprData['Approval_1']+"\")");
            SignID = signature[0].ID;
            SignImage = signature[0].Signature.split('=')[1];
            signUrl = "https://creator.zohopublic.com/adminzoho_mawaridfs/survey/All_Employees/"+ SignID+"/Signature/image-download/7e7r0XpU3YGmmA8ukrNUWe56Q6pgwOraT9TqGfxEUObSszqwYmrnt1qVwv1vNRWEyDCA2j5mQt4W1vHZ5TmjBOUWHfKX2mt05Vsk/"+SignImage;
            newRow = '<tr><td>Approval 1: '+aprData['Approval_1']+'</td><td>Time: '+aprData['Approval_1_Time']+'</td><td><img height="70px" src='+signUrl+'></td></tr>';
            $('#approvalTable').append(newRow);
        }
        if(aprData['Approval_2'] == ''){
            newRow = "<tr><td colspan=3>Approve Record <input type=checkbox id='approval_2'></td></tr>";
            $('#approvalTable').append(newRow);
            $('#approval_2').change(async function(){
                const updateData = {
                    data: {
                        "Approval_2": queryParams.CurrentUser,
                    }
                };
                updateResp = await updateZohoCreatorRecord("Employee_Onboarding_Report", queryParams.onboarding, updateData);
                location.reload();
            });

        }
        else{
            signature = await fetchZohoCreatorRecord("All_Employees", "(Email == \""+aprData['Approval_2']+"\")");
            SignID = signature[0].ID;
            SignImage = signature[0].Signature.split('=')[1];
            signUrl = "https://creator.zohopublic.com/adminzoho_mawaridfs/survey/All_Employees/"+ SignID+"/Signature/image-download/7e7r0XpU3YGmmA8ukrNUWe56Q6pgwOraT9TqGfxEUObSszqwYmrnt1qVwv1vNRWEyDCA2j5mQt4W1vHZ5TmjBOUWHfKX2mt05Vsk/"+SignImage;
            newRow = '<tr><td>Approval 2: '+aprData['Approval_2']+'</td><td>Time: '+aprData['Approval_2_Time']+'</td><td><img height="70px" src='+signUrl+'></td></tr>';
            $('#approvalTable').append(newRow);
        }
        if(aprData['Approval_3'] == ''){
            newRow = "<tr><td colspan=3>Approve Record <input type=checkbox id='approval_3'></td></tr>";
            $('#approvalTable').append(newRow);
            $('#approval_3').change(async function(){
                const updateData = {
                    data: {
                        "Approval_3": queryParams.CurrentUser,
                    }
                };
                updateResp = await updateZohoCreatorRecord("Employee_Onboarding_Report", queryParams.onboarding, updateData);
                location.reload();
            });
        }
        else{
            signature = await fetchZohoCreatorRecord("All_Employees", "(Email == \""+aprData['Approval_3']+"\")");
            SignID = signature[0].ID;
            SignImage = signature[0].Signature.split('=')[1];
            signUrl = "https://creator.zohopublic.com/adminzoho_mawaridfs/survey/All_Employees/"+ SignID+"/Signature/image-download/7e7r0XpU3YGmmA8ukrNUWe56Q6pgwOraT9TqGfxEUObSszqwYmrnt1qVwv1vNRWEyDCA2j5mQt4W1vHZ5TmjBOUWHfKX2mt05Vsk/"+SignImage;
            newRow = '<tr><td>Approval 3: '+aprData['Approval_3']+'</td><td>Time: '+aprData['Approval_3_Time']+'</td><td><img height="70px" src='+signUrl+'></td></tr>';
            $('#approvalTable').append(newRow);
        }
    }

    //When onboarding button click that time this will work
    $('#OnboardingButton').click(async function(){
        loadForm("onBoarding.html");
        $('#FormOnboarding #Date').html(new Date().toDateString());
        //Form UI

        //Populate relevant drop downs
        populateSelectList(await fetchZohoCreatorRecord("All_Employees", ""), "#FormOnboarding #Employee_ID", "Emp_No", false);

        //Attach event functions
        $('#FormOnboarding #Employee_ID').change(async function(){
            if(this.value!=""){
                repData = await fetchRecordById("All_Employees", this.value);
                $('#FormOnboarding #Name').html(repData.Name);
                $('#FormOnboarding #Email').html(repData.Email);
                $('#FormOnboarding #Mobile').html(repData.Phone);
                $('#FormOnboarding #Address').html(repData.Address);
                $('#FormOnboarding #Designation').html(repData.Designation.display_value);
                $('#FormOnboarding #Company').html(repData.Company.display_value);
                $('#FormOnboarding #Department').html(repData.Department.display_value);
                $('#FormOnboarding #Project').html(repData.Project.display_value);
                $('#FormOnboarding #Joining_Date').html(repData.Joining_Date);
                $('#FormOnboarding #Line_Manager').html(repData.Reporting_To.display_value);
                LMData = await fetchRecordById("All_Employees", repData.Reporting_To.ID);
                $('#FormOnboarding #LM_Emp_No').html(LMData.Emp_No);
            }
        });
    });

    //onboarding form submit
    $('#FormOnboarding #submitForm').click(async function() {
        const recordData = {
            data: {}
        };
        // Handle text inputs and selects
        $('#FormOnboarding input[type="text"], .Survey select, .Survey textarea').each(function() {
            const fieldName = $(this).attr('id'); // Get field ID
            const fieldValue = $(this).val();     // Get field value
            recordData.data[fieldName] = fieldValue;
        });
        $('#FormOnboarding input[type="date"]').each(function() {
            var date = $(this).val();
            if(date != ""){
                var t = new Date(date);
                var formattedDate = t.getDate()+'-'+t.toLocaleString("en-us", { month: "short" })+'-'+t.getFullYear();
                const fieldName = $(this).attr('id'); // Get field ID
                recordData.data[fieldName] = formattedDate;
            }
        });
        // Handle radio buttons
        $('#FormOnboarding input[type="radio"]:checked, #FormOnboarding input[type="checkbox"]:checked').each(function() {
            const fieldName = $(this).attr('name'); // Get field name
            const fieldValue = $(this).val();       // Get selected value
            if(fieldValue == 'on'){
                const fieldValue = true;
            }
            recordData.data[fieldName] = fieldValue;
        });
        //Handle Static Data
        $('#FormOnboarding td[id]').each(function() {
            const fieldName = $(this).attr('id'); // Get field name
            if(fieldName != "Date"){
                const fieldValue = $(this).html();       // Get selected value
                recordData.data[fieldName] = fieldValue;
            }
        });
        //Add Submitters info 
        const d = new Date();
        recordData.data['Filled_By'] = queryParams.CurrentUser;
        resp = await createZohoCreatorRecord("Employee_Onboarding", recordData);
        $('#Success').show();
        $('#FormOnboarding').hide();
    });
});