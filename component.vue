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
    }
};
</script>

<style>

</style>
