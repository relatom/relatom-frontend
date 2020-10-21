const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
  	extend: {
  		height: {
  			'14': '3.5rem'
  		},     
	    maxHeight: {
			  '64': '16rem'
		  }
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']
  },
  plugins: [
    plugin(function({ addComponents }) {
       	const container = {
	       	'.container': {
	            width: '100%',
              'margin-left': 'auto',
              'margin-right': 'auto',
	            // Based on Grid options of bootstrap
	            '@screen sm': {
	            	maxWidth: 'auto',
	          	},
	          	'@screen md': {
	            	maxWidth: '43.75em',
	          	},
	          	'@screen lg': {
	           		maxWidth: '43.75em',
	          	},
	          	'@screen xl': {
	            	maxWidth: '43.75em',
	          	}
	        }
        }

      addComponents(container)
    })
  ]
}