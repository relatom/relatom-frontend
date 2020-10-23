import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const settings = {
	TInput: {
    	classes: 'border block w-full rounded py-2 px-3 text-gray-800',
  	},
  	TButton: {
    	classes: 'bg-indigo-200',
    	variants: {
    		'full': 'fixed bottom-0 left-0 right-0 mb-20 w-full bg-indigo-600 text-white'
    	},
    	fixedClasses: 'py-3'
  	},
}

Vue.use(VueTailwind, settings)