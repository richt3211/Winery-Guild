const template = 
`
<v-app v-cloak>
    <v-content>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12>
                    <v-toolbar style="background-color: #cc3230">
                        <v-toolbar-side-icon>
                            <v-avatar>
                                <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/edce7f6eeee3062a0077fc33d57d65d3.svg" alt="avatar">
                            </v-avatar>
                        </v-toolbar-side-icon>
                        <v-toolbar-title class="display-1 font-weight-thin">Winery Guild</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-menu open-on-hover offset-y>
                            <v-btn round slot="activator">Filter</v-btn>
                            <v-toolbar>
                                <v-toolbar-title v-for="item in items1">
                                    <v-btn slot="activator">{{ item.title }}</v-btn>
                                </v-toolbar-title>
                            </v-toolbar>
                        </v-menu>
                        <v-btn round>Claim</v-btn>
                        <v-btn round>Upgrade</v-btn>
                    </v-toolbar>
                </v-flex>
                <v-flex xs12 display-1>
                    Winery Name
                </v-flex>
                <v-flex xs12>
                    <v-parallax src="https://picsum.photos/1920/500/?image=443"></v-parallax>
                </v-flex>

                <v-flex xs4>
                    <v-parallax src="https://picsum.photos/700/700/?image=230"></v-parallax>
                </v-flex>
                <v-flex xs4>
                    <v-parallax src="https://picsum.photos/700/700/?image=606"></v-parallax>
                </v-flex>
                <v-flex xs4>
                    <v-parallax src="https://picsum.photos/700/700/?image=688"></v-parallax>
                </v-flex>

                <v-flex xs12>
                    <v-btn round> Call </v-btn>
                    <v-btn round> Email </v-btn>
                    <v-btn round> Hours </v-btn>
                    <v-btn round> Info </v-btn>
                </v-flex>

                <v-flex xs12>
                    <!-- NEED TO GET GOOGLE MAPS API -->
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>

`

export default template