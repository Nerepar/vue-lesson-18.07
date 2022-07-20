<template src="./template.html">
</template>

<script>
    export default {
        name: "MainMenu",
        data() {
            return {
                menuItems: [
                    {
                        title: 'Главная страница',
                        path: '/'
                    },
                    {
                        title: 'Сотрудники',
                        path: '/employs'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less" src="./Style.less">

</style>