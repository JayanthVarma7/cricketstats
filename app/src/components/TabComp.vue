<template>
    <div>
         <o-tabs v-model="activeTab" position="centered" expanded>
            <o-tab-item value="0" label="Teams">
                <table-comp :tabcount="0"/>
            </o-tab-item>

            <o-tab-item :value="1" label="Highest Runs">
                <table-comp :tabcount="1"/>
            </o-tab-item>

            <o-tab-item value="2" label="Highest wickets">
                <table-comp :tabcount="2"/>
            </o-tab-item>
    </o-tabs>
    </div>
</template>

<script>
import { reactive, toRefs }from 'vue';
import TableComp from "./TableComp.vue";

export default {
    name:"TabComp",
    components:{
        TableComp,
    },
    setup() {

     const state = reactive ({ 
        activeTab:"0",
     });
     return {
         ...toRefs(state)
     }
    },
};
</script>

<style scoped>
    ::v-deep(button) {
        font-size: x-large !important;
    }
</style>