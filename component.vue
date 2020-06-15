<template>
    <div>
        <h3 v-if="meta.label">{{ meta.label }}</h3>
        <md-field>
            <label>Font</label>
            <md-autocomplete
                    :value="value"
                    @input="$emit('input', $event)"
                    :md-options="fonts"
                    @md-changed="getFonts"
                    @md-opened="getFonts"
                    md-layout="box">
                <label>Search...</label>
                <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.family }}</template>
            </md-autocomplete>
        </md-field>
    </div>
</template>

<script>

module.exports = {
    props: {
        value: {
            default: '',
            type: [String, Object],
        },
        meta: Object,
    },
    data: () => ({
       fontList: [],
       fonts: [],
    }),
/*    mounted: function() {
        node_modules['axios'].get(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC_RgpPbpNDPSSaBHXMr5XkzKgCm4S9Bys`)
            .then(function (response) {
                // handle success

                this.fontList = response.data.items;
                console.log(this.fontList);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },*/
    methods: {
        async getFonts (searchTerm) {
            console.log(this);
            if (!this.fontList) {
                await node_modules['axios'].get(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC_RgpPbpNDPSSaBHXMr5XkzKgCm4S9Bys`)
                    .then(function (response) {
                        // handle success

                        this.fontList = response.data.items;
                        console.log(this.fontList);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
            console.log(this.fontList);
            this.fonts = new Promise(resolve => {
                if (!searchTerm) {
                    resolve(this.fontList)
                } else {
                    const term = searchTerm.toLowerCase();
                    resolve(this.fontList.filter(({family}) => family.toLowerCase().includes(term)));
                }
            });
        }
    },


};


</script>

<style>

</style>
