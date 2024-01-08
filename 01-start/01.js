var newInput = {
    value: 2,
    valid: true,
    validator: function () { },
};
var newForm = {
    inputList: [{ value: 1, valid: true, validator: function () { } }, newInput],
    submitFunction: function () {
        console.log("SUBMIT", this.inputList);
    },
    cancelFunction: function () {
        console.log("CANCEL");
    },
};
newForm.submitFunction();
