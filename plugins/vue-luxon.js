import Vue from 'vue'
import VueLuxon from "vue-luxon";

Vue.use(VueLuxon, {
    serverZone: 'utc',
    serverFormat: 'sql',
    clientZone: 'locale',
    clientFormat: 'locale',
    localeLang: 'fr',
});