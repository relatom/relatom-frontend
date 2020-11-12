<template>
	<div>
		<sub-header :title="event.title">
			<template v-slot:actions>
				<t-button variant="primary-sm" :to="{path:'/events/' + $route.params.hashid + '/edit'}">Modifier</t-button>
	  			<t-button variant="delete-sm" class="ml-3">Annuler</t-button>
	  		</template>
	  	</sub-header>
		<container>
			<div class="mb-4 bg-white rounded-2xl p-4 border">
				<events-info-block title="Quand">
					<p>{{ when }}</p>
				</events-info-block>
				<events-info-block title="Où">
					<p>Etang du boulet (Feins)</p>
				</events-info-block>
				<events-info-block title="Organisateur(s)">
					<p>Sybille Blat, Célestin Ballèvre</p>
				</events-info-block>
				<events-info-block title="Notes">
					<p>{{ event.notes }}</p>
				</events-info-block>
				<events-info-block title="Participants">
					<p><span>Sybille B., Célestin B., </span><span v-for="participant, index in participants">{{participant.fullname_short}}, </span></p>
				</events-info-block>
			</div>			
			<div class="mb-4">
				<p class="font-bold ml-3 mb-2">Allez-vous participez ?</p>
				<div class="bg-white border rounded-2xl p-4">
					<div class="flex justify-between mb-1" v-for="participation in participations">
						<p v-if="participation.id == $auth.user.id">Vous ({{ participation.firstname }})</p>
						<p v-else>{{ participation.firstname }}</p>
						<t-toggle v-model="participation.is_participating" v-on:change="sendParticipation(participation)"/>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<p class="font-bold ml-3 mb-2">Commentaires</p>
				<div class="mb-3 bg-white border rounded-2xl px-4 py-3">
					<tu-form-with-validation v-on:onSubmit="sendComment" ref="commentForm">
						<tu-textarea-with-validation
							rules="required" 
							placeholder="Votre commentaire..." 
							v-model="message" />
						<tu-submit-button 
							icon="paper-airplane"
							name="Envoyer" />
					</tu-form-with-validation>
				</div>
				<div class="mb-3 bg-white border rounded-2xl px-4 py-3" v-for="comment in comments">
					<p class="text-gray-900 text-sm font-semibold">{{ comment.created_by }}</p>
					<p class="text-gray-700">{{ comment.message }}</p>
				</div>
			</div>
		</container>
	</div>
</template>

<script>

import { DateTime } from 'luxon';
import { mapState } from 'vuex';

export default {
	data () {
		return {
			'message': null
		}
	},
	computed: {
  		'when': function() {
	      let start = DateTime.fromSQL(this.event.starts_at);
	      let end = DateTime.fromSQL(this.event.ends_at);
	      const startDate = start.toISODate();
	      const endDate = end.toISODate();
	      
	      if(this.event.is_all_day && startDate == endDate) {
	        return start.toFormat('dd LLL') ;
	      } else if(this.event.is_all_day && startDate != endDate) {
	        return start.toFormat('dd LLL') + ' - ' + end.toFormat('dd LLL');
	      } else if(!this.event.is_all_day && startDate != endDate) {
	        return start.toFormat('dd LLL') + ' ' + start.toLocaleString(DateTime.TIME_SIMPLE) + ' - ' + end.toFormat('dd LLL') + ' ' + start.toLocaleString(DateTime.TIME_SIMPLE);
	      } 

	      return start.toLocaleString(DateTime.DATE_HUGE) + ' de ' + start.toLocaleString(DateTime.TIME_SIMPLE) + ' à ' + end.toLocaleString(DateTime.TIME_SIMPLE);
	    }
  	},
  	methods: {
  		sendComment: function() {
  			console.log(this.message);
  			let vm = this;
  			this.$axios.$post('/events/' + this.$route.params.hashid + '/comments', {
  				message : this.message
  			})
  			.then(function (response) {
  				vm.message = null;
  				vm.$refs.commentForm.reset();
    			vm.comments.unshift(response.data);
  			})
  			.catch(function (error) {
    			console.log(error);
  			});
  		},
  		sendParticipation: function(participation) {
  			this.$axios.$post('/events/' + this.$route.params.hashid + '/participations', {
  				id : participation.id
  			}).then(response => {
  				this.participants = response.data;
  			});
  		}
  	},
    async asyncData({ params, $axios }) {

	    const resEvent = await $axios.$get('/events/' + params.hashid)
	    const resComments = await $axios.$get('/events/' + params.hashid + '/comments')
	    const resParticipants = await $axios.$get('/events/' + params.hashid + '/participants');
	    const resParticipations = await $axios.$get('/events/' + params.hashid + '/participations');

	    const event = await resEvent.data
	    const comments = await resComments.data
	    const participants = await resParticipants.data
	    const participations = await resParticipations.data

	    return { event, comments, participants, participations }
	}
}
</script>