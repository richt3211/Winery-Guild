const template = `
<v-app v-cloak>
    <v-content class="bgGrad">
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
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-card class="cardForm"> 
                        <v-form v-model="valid">
                            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            <v-text-field v-model="phone" label="Phone" required></v-text-field>
                            <v-text-field v-model="wineryInf" label="Winery" required></v-text-field>
                            <v-btn round>Claim This Winery</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>

            
                <v-container>
                    <v-flex>
                        
                            <h1 class="display-2">How Our Listings Work</h1>
                            <p class="headline font-weight-thin">
                                We currently have most of the wineries in the united states listed in out directory as unclaimed. Which means we have very little information to present about these unclaimed wineries.

                                In an effort to give our users the best experience possible we rank upgraded wineries (claimed or premium) higher than the basic unclaimed wineries.
                            </p>
                        
                    </v-flex>
                </v-container>
            
                    <v-flex xs4>
                        <img id="phone" src="../../lib/phone.png">
                    </v-flex>
                
            </v-layout>
            <v-layout row justify-center>
                <v-flex>
                    <img id="laptop" src="../../lib/laptop.png">
                </v-flex>
                <v-container>
                    <v-flex>
                        
                        <h1 class="display-2">Claimed Listings</h1>
                            
                        <h2 class="title"><i class="material-icons">done</i>Profile Page</h2>
                        <p class="headline font-weight-thin">After you claim your listing we’ll use your website to gather all the information we need for your profile page so you won’t have to do any work.</p>
                        <h3 class="title"><i class="material-icons">done</i>Upgraded Listing</h3>
                        <p class="headline font-weight-thin">Your listing will show up in the claimed section including your logo, location and bolder title so you’ll stand out and reach more customers. (then claim your listing button)</p>
                        
                    </v-flex>
                </v-container>
            </v-layout>
            <v-container fluid>
                <v-layout align-end fill-height row justify-center>
                    <v-flex xs12>
                        <v-footer dark height="auto">
                            <v-card flat tile class="flex">
                                <v-card-text>
                                    <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                                        <v-icon size="24px">{{ icon }}</v-icon>
                                    </v-btn>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-avatar id="wineGlass" size="48px">
                                    <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/edce7f6eeee3062a0077fc33d57d65d3.svg" alt="avatar">
                                </v-avatar>
                                <v-card-text class="title white--text font-weight-light">WINERY GUILD</v-card-text>
                                <v-divider></v-divider>
                                <v-card-text class="white--text">&copy;Some Company Co. 2018</v-card-text>
                            </v-card>
                        </v-footer>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </v-content>
</v-app>
`

export default template