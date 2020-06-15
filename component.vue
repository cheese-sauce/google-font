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
                    :md-fuzzy-search="false"
                    md-dense
            >
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
       fontList: undefined,
       fonts: [],
    }),
    methods: {
        getFonts (searchTerm) {
            this.fonts = new Promise(resolve => {
                window.setTimeout(async() => {
                    if (!this.fontList) {
                        console.log('getting fonts');
                        this.fontList = await node_modules['axios'].get(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC_RgpPbpNDPSSaBHXMr5XkzKgCm4S9Bys`)
                            .then(function (response) {
                                // handle success
                                return response.data.items;
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });
                    }
                    if (!searchTerm) {
                        resolve(this.fontList)
                    } else {
                        const term = searchTerm.toLowerCase();
                        resolve(this.fontList.filter(({family}) => family.toLowerCase().includes(term)));
                    }
                }, 1000);

            });
        }
    },


};


</script>

<style>

</style>
