import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const settings = {
	TInput: {
    classes: 'border rounded-2xl py-2 px-3 text-gray-800',
  },
  TTextarea: {
    classes: 'form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5'
  },
  TCheckbox: {
    wrapped: true,
  },
  TInputGroup: {
    classes: {
      wrapper: 'mb-4',
      label: 'block text-sm leading-5 font-medium text-gray-700',
      body: 'flex flex-wrap',
      feedback: 'mt-2 text-sm text-red-500',
      description: 'mt-2 text-sm text-gray-500'
    },
  },
	TButton: {
  	classes: 'bg-indigo-200',
  	variants: {
  		'full': 'fixed bottom-0 left-0 right-0 mb-16 w-full bg-indigo-600 text-white md:static md:w-auto px-3 py-2 md:rounded-2xl'
  	},
  	fixedClasses: 'py-3'
	},
}

Vue.use(VueTailwind, settings)