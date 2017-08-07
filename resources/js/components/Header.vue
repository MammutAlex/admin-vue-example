<template>
    <div>
        <span v-text="test"></span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                test: 'test'
            }
        },
        mounted() {
            console.log(this.test);
        },
    }
</script>