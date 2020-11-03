import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { DateTime } from 'luxon';

extend("required", {
  ...required,
  message: "The :attribute field is required."
});

extend('after_or_equal', {
  params: ['date'],
  validate(value, { date }) {
    return DateTime.fromSQL(date) <= DateTime.fromSQL(value);
  },
  message: 'The :attribute must be a date after or equal to :date.'
});

extend('after', {
  params: ['date'],
  validate(value, { date }) {
    return DateTime.fromSQL(date) < DateTime.fromSQL(value);
  },
  message: 'The :attribute must be a date after :date.'
});