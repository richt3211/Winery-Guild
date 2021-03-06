const template = 
`
<v-app v-cloak>
    <v-content>
        <v-container style="padding: 0;" fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                
                <v-flex lg12 style="padding:0; margin-bottom: 2rem;">
                    <v-parallax v-if="winery.background && winery.background != 'undefined'" v-bind:src="winery.background"></v-parallax>
                </v-flex>
                
                <v-flex xs12>
                    
                </v-flex>
                
                <v-avatar v-if="winery.logo && winery.logo != 'undefined'" size="150" style=" z-index: 1000; top: -450px;"><img v-bind:src="winery.logo"></v-avatar>
                
                
                <v-flex xs12 style="top: -100px; position: relative;">
                    <iframe v-if="winery.videourl && winery.videourl != 'undefined'" v-bind:src="winery.videourl" style="border: 0; position:relative; top: -200px; height:700px; width: 1000px;"></iframe>
                </v-flex>
                
                <v-flex xs12 style="position:relative; top: -125px;">
                    <template v-if="winery.phone && winery.phone != 'undefined'">
                        <v-dialog max-width="250px">
                            <v-btn round slot="activator"> Call </v-btn>
                            <v-card>
                                <v-card-title><span>Call</span></v-card-title>
                                <v-divider />
                                <v-card-text>{{ winery.phone }}</v-card-text>
                            </v-card>
                        </v-dialog>
                    </template>
                
                    <template v-if="winery.websiteurl && winery.websiteurl != 'undefined'"
                        <a v-bind:href="urlink" target="_blank">
                            <v-btn round> Website </v-btn>
                        </a>    
                    </template>

                    <template v-if="winery.email && winery.email != 'undefined'"
                        <a v-bind:href="elink">
                            <v-btn round> Email </v-btn>
                        </a>
                    </template>
                </v-flex>

                <v-flex xs7 style="padding: 0;">
                    <p v-if="winery.description && winery.description != 'undefined'" style="padding: 1rem;" class="font-weight-thin headline">{{ winery.description }}</p>
                    <p v-else></p>
                </v-flex>
                <v-flex xs12 style="padding: 0; height: 100%;">
                    <iframe v-bind:src="mapLink" width="100%" height="500px" style="border: 0;">
                    </iframe>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>

`

export default template