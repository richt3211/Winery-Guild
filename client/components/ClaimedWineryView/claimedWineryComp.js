import template from './template.js'
import api from '../../helpers/api.js'
const claimedWineryView = Vue.component('claimed-winery-view', {
	template,
	data: function (){
		return {
			winery: null,
			elink: '',
			urlink: '',
			mapLink: '',
		}
	},
	created() {
		api.getWinery(this.$route.params._id)
			.then(winery => this.winery = winery)
	},
	watch: {
		winery(){
			this.elink = `mailto: ${this.winery[0].email}`
			this.urlink = this.winery[0].websiteurl
			this.mapLink = `https://www.google.com/maps/embed/v1/place?q=${this.winery[0].lng},${this.winery[0].lat}`
		}
		// <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=37.106377%2C%20-113.580351&key=AIzaSyDYRgFCVHTcMUmOi3gyyiTzpfDZCH_MAGU" allowfullscreen></iframe>
	}
})
	
export default claimedWineryView