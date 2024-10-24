$(document).ready(async function() {
    
    await initZohoCreator();
    
    var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();

    if(queryParams.manPower !== undefined){
        //Approval Screen
        loadForm("manPowerForm.html");
        $('#FormManPower .Submit').hide();
        aprData = await fetchRecordById("All_Man_Power_Requisitions", queryParams.manPower);
        $('#FormManPower input, #FormManPower textarea, #FormManPower select').each(function() {
            var $this = $(this); // Cache the current element
            var id = $this.attr("id"); // Get the id once
            var parentTd = $this.parent('td'); // Get the parent <td>
        
            if ($this.is(':radio')) {
                var name = $this.attr('name');
                parentTd.html(aprData[name]);
            } else {
                // Handle non-radio input, textarea, and select
                if ($.isPlainObject(aprData[id])) {
                    parentTd.html(aprData[id].display_value); // Use display_value if it's an object
                } else {
                    parentTd.html(aprData[id]); // Use the value directly if not an object
                }
            }
        });
        $('#FormManPower td[id]').each(function() {
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
                updateResp = await updateZohoCreatorRecord("All_Man_Power_Requisitions", queryParams.manPower, updateData);
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
                updateResp = await updateZohoCreatorRecord("All_Man_Power_Requisitions", queryParams.manPower, updateData);
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
                updateResp = await updateZohoCreatorRecord("All_Man_Power_Requisitions", queryParams.manPower, updateData);
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

    //When man power button click that time this will work
    $('#manPowerButton').click(async function(){
        loadForm("manPowerForm.html");
        $('#FormManPower #Date').html(new Date().toDateString());
        //Form UI
        $('#FormManPower #Designation').hide();
        //Populate relevant drop downs
        populateSelectList(await fetchZohoCreatorRecord("All_Designations", ""), "#FormManPower #Designation", "Designation", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Companies", ""), "#FormManPower #Company", "Name", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Projects", ""), "#FormManPower #Project", "Project", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Departments", ""), "#FormManPower #Department", "Department", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Employees", ""), "#FormManPower #Replacement", "Emp_No", true);
        
        $('#FormManPower #Replacement').change(async function(){
            if(this.value!=""){
                repData = await fetchRecordById("All_Employees", this.value);
                $('#FormManPower #Emp_Name').html(repData.Name);
                $('#FormManPower #Gross_Salary_Replacement').html(repData.Gross_Salary);
                $('#FormManPower #Designation_Replacement').html(repData.Designation.display_value);
            }
        });

        $('#FormManPower input[type=radio][name=Title]').change(function() {
            if (this.value == 'New') {
                $('#FormManPower #New_Designation').show();
                $('#FormManPower #Designation').hide();
            }
            else if (this.value == 'Existing') {
                $('#FormManPower #New_Designation').hide();
                $('#FormManPower #Designation').show();
            }
        });
    });

    //manpower form submit
    $('#FormManPower #submitForm').click(async function() {
        const recordData = {
            data: {}
        };

        // Handle text inputs and selects
        $('#FormManPower input[type="text"], .Survey select, .Survey textarea').each(function() {
            const fieldName = $(this).attr('id'); // Get field ID
            const fieldValue = $(this).val();     // Get field value
            recordData.data[fieldName] = fieldValue;
        });
        $('#FormManPower input[type="date"]').each(function() {
            var date = $(this).val();
            if(date != ""){
                var t = new Date(date);
                var formattedDate = t.getDate()+'-'+t.toLocaleString("en-us", { month: "short" })+'-'+t.getFullYear();
                const fieldName = $(this).attr('id'); // Get field ID
                recordData.data[fieldName] = formattedDate;
            }
        });
        // Handle radio buttons
        $('#FormManPower input[type="radio"]:checked').each(function() {
            const fieldName = $(this).attr('name'); // Get field name
            const fieldValue = $(this).val();       // Get selected value
            recordData.data[fieldName] = fieldValue;
        });
        //Handle Static Data
        $('#FormManPower td[id]').each(function() {
            const fieldName = $(this).attr('id'); // Get field name
            if(fieldName != "Date"){
                const fieldValue = $(this).html();       // Get selected value
                recordData.data[fieldName] = fieldValue;
            }
        });
        //Some properties should be passed only if certain value is true so handle that
        if(recordData.data['Title'] == "New"){
            delete recordData.data.Designation;
        }
        else{
            delete recordData.data.New_Designation;
        }
        //Add Submitters info 
        const d = new Date();
        recordData.data['Filled_By'] = queryParams.CurrentUser;
        resp = await createZohoCreatorRecord("Man_Power_Requisition", recordData);
        $('#Success').show();
        $('#FormManPower').hide();
    });
});