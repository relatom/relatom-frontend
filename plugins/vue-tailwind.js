import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const settings = {
	TInput: {
    fixedClasses: "field ml-4 first:ml-0",
  },
  TTextarea: {
    classes: 'field rounded-br-none'
  },
  TCheckbox: {
    wrapped: true,
    classes: {
      wrapper : 'field',
      label: 'ml-2'
    } 
  },
  TInputGroup: {
    classes: {
      wrapper: 'mb-4',
      label: 'inline-block leading-6 mb-1 text-gray-900',
      body: 'flex flex-wrap',
      feedback: 'mt-2 text-sm text-red-500',
      description: 'mt-2 text-sm text-gray-500'
    },
  },
	TButton: {
  	classes: 'bg-indigo-200',
  	variants: {
  		'full': 'fixed bottom-0 left-0 right-0 mb-16 w-full bg-indigo-600 text-white md:static md:w-auto px-3 py-2 md:rounded-2xl',
  	  'primary': 'btn btn-primary py-2',
      'primary-sm': 'btn btn-primary btn-sm',
      'secondary': 'btn btn-secondary py-2',
      'secondary-sm': 'btn btn-secondary btn-sm',
      'delete': 'btn btn-delete py-2',
      'delete-sm': 'btn btn-delete btn-sm',
    },
  	fixedClasses: ' px-4 rounded-2xl'
	},
}

Vue.use(VueTailwind, settings)