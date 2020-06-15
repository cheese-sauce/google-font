<template>
    <div>
        <h3 v-if="meta.label">{{ meta.label }}</h3>
        <md-field>
            <label>Font</label>
            <md-autocomplete
                    :value="value"
                    @input="$emit('input', $event)"
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

import {getFonts} from "./font.service";

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
    mounted: function() {
        this.fontList = getFonts();
    },
    methods: {
        getFonts (searchTerm) {
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
