<template>
    <div>
        <h3 v-if="meta.label">{{ meta.label }}</h3>
        <md-field>
            <label>Font</label>
            <md-input :value="value" @input="$emit('input', $event)"></md-input>
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
    mounted: function() {
        console.log(node_modules);
        node_modules['axios'].get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC_RgpPbpNDPSSaBHXMr5XkzKgCm4S9Bys')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
};


</script>

<style>

</style>
