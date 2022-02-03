<template>
    <div>
        单独的路由
        <div>
            <Button @click="back" type="primary" style="margin-left: 100px">返回</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'other',
    methods: {
        back() {
            this.$router.back()
        },
    },
}
</script>

<style>

</style>
