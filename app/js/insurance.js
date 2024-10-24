$(document).ready(async function() {

    //Initialize zoho creator
    await initZohoCreator();

    var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();

    //When InsuranceReqButton button click that time this will work
    $('#InsuranceReqButton').click(async function(){
        
        loadForm("insurance.html");
        $('#FormInsurance #Date').html(new Date().toDateString());
        //Form UI
        $('#FormInsurance #Comment').hide();
        $('#FormInsurance #AgeSect').hide();

        //Populate relevant drop downs
        populateSelectList(await fetchZohoCreatorRecord("All_Employees", ""), "#FormInsurance #Employee", "Emp_No", false);

        //Attach event functions
        $('#FormInsurance input[type=radio][name=Type]').change(function() {
            if (this.value == 'Other') {
                $('#FormInsurance #Comment').show();
            }
            else{
                $('#FormInsurance #Comment').hide();
            }
        });
        $('#FormInsurance input[type=radio][name=Family]').change(function() {
            if (this.value == 'Spouse') {
                $('#FormInsurance #AgeSect').hide();
            }
            else{
                $('#FormInsurance #AgeSect').show();
            }
        });
        $('#FormInsurance #Employee').change(async function(){
            if(this.value!=""){
                repData = await fetchRecordById("All_Employees", this.value);
                $('#FormInsurance #Name').html(repData.Name);
                $('#FormInsurance #Email').html(repData.Email);
                $('#FormInsurance #Mobile').html(repData.Phone);
                $('#FormInsurance #Designation').html(repData.Designation.display_value);
                $('#FormInsurance #Company').html(repData.Company.display_value);
                $('#FormInsurance #Department').html(repData.Department.display_value);
                $('#FormInsurance #Project').html(repData.Project.display_value);
                $('#FormInsurance #Joining_Date').html(repData.Joining_Date);
                $('#FormInsurance #Line_Manager').html(repData.Reporting_To.display_value);
                $('#FormInsurance #Nationality').html(repData.Nationality);
            }
        });
        
    });
});