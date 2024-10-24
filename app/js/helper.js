async function initZohoCreator() {
    try {
        await ZOHO.CREATOR.init();
    } catch (error) {
        console.error("Error initializing Zoho Creator SDK:", error);
    }
}

async function createZohoCreatorRecord(formName, data) {
    try {
        config = {
            formName : formName,
            data : data,
        }
        const response = await ZOHO.CREATOR.API.addRecord(config);
        return response;  // Return fetched data
    } catch (error) {
        console.error("Error fetching records:", error);
    }
}

async function updateZohoCreatorRecord(reportName, id, data) {
    try {
        config = {
            reportName : reportName,
            data : data,
            id : id,
        }
        const response = await ZOHO.CREATOR.API.updateRecord(config);
        return response;  // Return fetched data
    } catch (error) {
        console.error("Error fetching records:", error);
    }
}

async function fetchZohoCreatorRecord(reportName, criteria) {
    try {
        config = {
            reportName : reportName,
            page : 1,
            pageSize : 200
        }
        if(criteria != ""){
            config["criteria"] = criteria;
        }
        const response = await ZOHO.CREATOR.API.getAllRecords(config);
        return response.data;  // Return fetched data
    } catch (error) {
        console.error("Error fetching records:", error);
    }
}

async function fetchRecordById(reportName, id){
    try {
        config = {
            reportName : reportName,
            id : id,
        }
        const response = await ZOHO.CREATOR.API.getRecordById(config);
        return response.data;  // Return fetched data
    } catch (error) {
        console.error("Error fetching records:", error);
    }
}

//UI Functions
function populateSelectList(dataArray, selectElementId, labelProperty, noneOption) {
    const $selectElement = $(selectElementId); // Use jQuery to select the element by ID
    // Clear any existing options
    $selectElement.empty();
    // Add "none" option if required
    if (noneOption === true) {
        $selectElement.append($('<option>', { 
            value: '', 
            text: 'Select Value' 
        }));
    }
    
    // Populate the select list
    $.each(dataArray, function(index, item) {
        $selectElement.append($('<option>', {
            value: item.ID,
            text: item[labelProperty]
        }));
    });
}

function loadForm(formUrl) {
    const url = "forms/"+formUrl;
    $("#formContainer").load(url);
    $("#Menu").hide();  // Hide menu when form is loaded
  }