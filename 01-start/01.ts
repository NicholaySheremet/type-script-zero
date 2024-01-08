type Input = {
  value: string | number | null;
  valid?: boolean;
  validator?: () => void;
};

type NumberInput = {
  value: number;
  valid?: boolean;
  validator?: () => void;
};

type ValidatedInput = {
  valid: boolean;
  validator: () => void;
};

type Form = {
  inputList: (Input & NumberInput & ValidatedInput)[] | [] | null;
  submitFunction: () => void;
  cancelFunction: () => void;
};

const newInput: Input & NumberInput & ValidatedInput = {
  value: 2,
  valid: true,
  validator: () => {},
};

const newForm: Form = {
  inputList: [{ value: 1, valid: true, validator: () => {} }, newInput],
  submitFunction() {
    console.log("SUBMIT", this.inputList);
  },
  cancelFunction() {
    console.log("CANCEL");
  },
};

newForm.submitFunction();
