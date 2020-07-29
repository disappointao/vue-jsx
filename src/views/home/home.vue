<template>
    <el-container class="example">
        <el-aside width="200px">
            <el-menu
                    default-active="/home/form"
                    class="el-menu-vertical-demo"
                    @select="$_handleSelectMenu"
            >
                <el-menu-item index="/home/form">
                    <i class="el-icon-menu"></i>
                    <span slot="title">表单封装</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "home",
        methods:{
            $_handleSelectMenu(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .example {
        width: 100%;
        height: 100%;
        ::v-deep {
            .el-aside {
                border-right: solid 1px #e6e6e6;
            }
            .el-menu {
                border-right: none;
            }
        }
    }
</style>
