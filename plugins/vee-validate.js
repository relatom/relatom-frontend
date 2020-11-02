import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { DateTime } from 'luxon';

extend("required", {
  ...required,
  message: "This field is required or your custom error message"
});
