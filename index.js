document.getElementById("createInput").addEventListener("click", function () {
    // Create input field
    var inputField = document.createElement("div");
    inputField.className = "input-field";

    var inputLabel = document.createElement("label");
    inputLabel.textContent = "Input Field";
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = "inputid";
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    // Append elements to inputField
    inputField.appendChild(inputLabel);
    inputField.appendChild(document.createElement("br"));
    inputField.appendChild(inputElement);
    inputField.appendChild(document.createElement("br"));
    inputField.appendChild(deleteButton);

    // Append inputField to the right div
    document.querySelector(".right").appendChild(inputField);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
        inputField.remove();
    });
});

// JavaScript to create select field and delete button
document.getElementById("createSelect").addEventListener("click", function () {
    // Create select field
    var selectField = document.createElement("div");
    selectField.className = "select-field";
    selectField.id = "selectid";
    var selectLabel = document.createElement("label");
    selectLabel.textContent = "Select Field";

    var selectElement = document.createElement("select");
    selectElement.id = "selectid"
    // Create options
    var option1 = document.createElement("option");
    option1.value = "option1";
    option1.textContent = "Option 1";
    var option2 = document.createElement("option");
    option2.value = "option2";
    option2.textContent = "Option 2";
    var option3 = document.createElement("option");
    option3.value = "option3";
    option3.textContent = "Option 3";

    // Append options to select element
    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    selectElement.appendChild(option3);

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    // Append elements to selectField
    selectField.appendChild(selectLabel);
    selectField.appendChild(document.createElement("br"));
    selectField.appendChild(selectElement);
    selectField.appendChild(document.createElement("br"));
    selectField.appendChild(deleteButton);

    // Append selectField to the right div
    document.querySelector(".right").appendChild(selectField);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
        selectField.remove();
    });
});

// JavaScript to create text field and delete button
document.getElementById("createText").addEventListener("click", function () {
    // Create text field
    var textField = document.createElement("div");
    textField.className = "text-field";
    textField.id = "textid"
    var textLabel = document.createElement("label");
    textLabel.textContent = "Text Field";
    var textElement = document.createElement("input");
    textElement.type = "text";
    textElement.id = "textid"
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    // Append elements to textField
    textField.appendChild(textLabel);
    textField.appendChild(document.createElement("br"));
    textField.appendChild(textElement);
    textField.appendChild(document.createElement("br"));
    textField.appendChild(deleteButton);

    // Append textField to the right div
    document.querySelector(".right").appendChild(textField);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
        textField.remove();
    });
});

// JavaScript to print inputs on console in JSON format
document.getElementById("printInputs").addEventListener("click", function () {
    // Get all input elements in the right div
    var inputs = document.querySelectorAll('.input-field input');
    var selects = document.querySelectorAll('.select-field select');
    var texts = document.querySelectorAll('.text-field input');
    var inputValues = [];
    // Iterate through each input element and store its value
    inputs.forEach(function (input) {

        inputValues.push({
            type: "input",
            inputvalue: input.value
        });
    });

    selects.forEach(function (input) {

        inputValues.push({
            type: "select",
            selectvalue: input.value
        });
    });

    texts.forEach(function (input) {

        inputValues.push({
            type: "textarea",
            textvalue: input.value
        });
    });
    // Convert input values array to JSON
    var inputsJSON = JSON.stringify(inputValues);
    // Print inputs in JSON format
    console.log(inputsJSON);


});

