$(document).ready(async function() {

    //Initialize zoho creator
    await initZohoCreator();

    var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
    
    //Employee Transfer Form JS
    $('#EmpTransferButton').click(async function(){
        loadForm("empTransfer.html");
        $('#FormTransfer #Date').html(new Date().toDateString());
        //Form UI

        //Populate relevant drop downs
        populateSelectList(await fetchZohoCreatorRecord("All_Employees", ""), "#FormTransfer #Employee", "Emp_No", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Companies", ""), "#FormTransfer #Receiving_Company", "Name", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Departments", ""), "#FormTransfer #Receiving_Department", "Department", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Designations", ""), "#FormTransfer #Receiving_Designation", "Designation", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Projects", ""), "#FormTransfer #Receiving_Project", "Project", false);
        populateSelectList(await fetchZohoCreatorRecord("All_Employees", ""), "#FormTransfer #Receiving_Line_Manager", "Emp_No", false);

        //Attach event functions
        $('#FormTransfer #Employee').change(async function(){
            if(this.value!=""){
                repData = await fetchRecordById("All_Employees", this.value);
                $('#FormTransfer #Name').html(repData.Name);
                $('#FormTransfer #Email').html(repData.Email);
                $('#FormTransfer #Mobile').html(repData.Phone);
                $('#FormTransfer #Address').html(repData.Address);
                $('#FormTransfer #Designation').html(repData.Designation.display_value);
                $('#FormTransfer #Company').html(repData.Company.display_value);
                $('#FormTransfer #Department').html(repData.Department.display_value);
                $('#FormTransfer #Project').html(repData.Project.display_value);
                $('#FormTransfer #Joining_Date').html(repData.Joining_Date);
                $('#FormTransfer #Line_Manager').html(repData.Reporting_To.display_value);
                $('#FormTransfer #Gross_Salary').html(repData.Gross_Salary);
                $('#FormTransfer #Receiving_Gross').html(repData.Gross_Salary);
                $('#FormTransfer #Emp_ID').html(repData.Emp_No);
            }
        });
        
    });
});