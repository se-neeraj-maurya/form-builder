export default () => {
  const fieldTypes = [
    {
      type: "text",
      displayName: "Text Input",
      icon: "mdi-format-text",
      defaultSettings: {
        label: "Text Field",
        placeholder: "Enter text",
        name: "textField",
        required: false,
        validation: {
          minLength: null,
          maxLength: null,
          pattern: null,
        },
      },
    },
    {
      type: "number",
      displayName: "Number Input",
      icon: "mdi-numeric",
      defaultSettings: {
        label: "Text Field",
        placeholder: "Enter text",
        name: "textField",
        required: false,
        validation: {
          minLength: null,
          maxLength: null,
          pattern: null,
        },
      },
    },
    {
      type: "email",
      displayName: "Email",
      icon: "mdi-email-outline",
      defaultSettings: {
        label: "Email Address",
        placeholder: "Enter email",
        name: "emailField",
        required: true,
        validation: {
          pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
          errorMessage: "Please enter a valid email address",
        },
      },
    },
    {
      type: "upload",
      displayName: "File Upload",
      icon: "mdi-tray-arrow-up",
      defaultSettings: {
        label: "Upload File",
        name: "fileUploadField",
        required: false,
        accept: [".jpg", ".png", ".pdf"],
        maxFileSize: 5, // in MB
        validation: {
          errorMessage:
            "File must be less than 5 MB and in JPG, PNG, or PDF format.",
        },
      },
    },
    {
      type: "password",
      displayName: "Password",
      icon: "mdi-key",
      defaultSettings: {
        label: "Password",
        placeholder: "Enter password",
        name: "passwordField",
        required: true,
        validation: {
          minLength: 8,
          errorMessage: "Password must be at least 8 characters",
        },
      },
    },
    {
      type: "select",
      displayName: "Dropdown",
      icon: "mdi-form-select",
      defaultSettings: {
        label: "Dropdown Field",
        name: "dropdownField",
        required: false,
        options: [
          { label: "1", value: "option1" },
          { label: "2", value: "option2" },
        ],
      },
    },
    {
      type: "radio",
      displayName: "Radio Button",
      icon: "mdi-radiobox-marked",
      defaultSettings: {
        label: "Radio Field",
        name: "radioField",
        required: false,
        options: [
          { label: "1", value: "optionA" },
          { label: "2", value: "optionB" },
        ],
      },
    },
    {
      type: "checkbox",
      displayName: "Checkbox",
      icon: "mdi-checkbox-outline",
      defaultSettings: {
        label: "Checkbox Field",
        name: "checkboxField",
        required: false,
        options: [
          { label: "1", value: "optionA" },
          { label: "2", value: "optionB" },
        ],
      },
    },
    {
      type: "date",
      displayName: "Date Picker",
      icon: "mdi-calendar-outline",
      defaultSettings: {
        label: "Date",
        name: "dateField",
        required: false,
        validation: {
          minDate: null,
          maxDate: null,
        },
      },
    },
    {
      type: "textarea",
      displayName: "Text Area",
      icon: "mdi-text",
      defaultSettings: {
        label: "Text Area",
        placeholder: "Enter text",
        name: "textAreaField",
        required: false,
        validation: {
          minLength: null,
          maxLength: null,
        },
      },
    },
    // {
    //   type: "button",
    //   displayName: "Button",
    //   icon: "mdi-button-pointer",
    //   defaultSettings: {
    //     label: "Submit",
    //     style: "primary",
    //     action: "submit",
    //   },
    // },
  ];
  return {
    fieldTypes,
  };
};
