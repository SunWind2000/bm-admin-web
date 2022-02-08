<template>
    <Row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <Table border stripe :columns="columns1" :data="data1"></Table>
    </Row>
</template>

<script>
export default {
    name: 'xdcDetails',
    props: {
        order: { // 蓄电池编号
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            columns1: [
                {
                    align: 'center',
                    title: 'cell_1',
                    key: 'cell_1',
                },
                {
                    align: 'center',
                    title: 'cell_2',
                    key: 'cell_2',
                },
                {
                    align: 'center',
                    title: 'cell_3',
                    key: 'cell_3',
                },
                {
                    align: 'center',
                    title: 'cell_4',
                    key: 'cell_4',
                },
                {
                    align: 'center',
                    title: 'cell_5',
                    key: 'cell_5',
                },
                {
                    align: 'center',
                    title: 'cell_6',
                    key: 'cell_6',
                },
            ],
            data1: null,
        }
    },
}
</script>

<style scoped>

</style>
