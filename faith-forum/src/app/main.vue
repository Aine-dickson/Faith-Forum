<template>
    <div class="app-container grid h-screen bg-slate-100 dark:bg-gray-900 dark:text-white">
        <header class="app-header h-full">
            <app_header/>
        </header>
        <nav class="lg_app-nav h-full hidden py-2 pl-1 sm:block overflow-hidden">
            <lg_aside/>
        </nav>
        <main class="app-main h-full bg-slate-50 py-2 pl-2 dark:bg-gray-900">
            <app_main/>
        </main>
        <footer class="app-footer h-full sm:hidden">
            <app_footer/>
        </footer>
    </div>
</template>

<script>

    import lg_aside from './includes/lg_side_nav.vue';
    import app_header from './includes/app_header.vue';
    import app_main from './includes/app_main.vue';
    import app_footer from './includes/app_footer.vue'

    export default {
        components: {
            lg_aside,
            app_header,
            app_main,
            app_footer
        },
        setup(){
            
            return {  }
        }
    }
</script>

<style>
    .app-container {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 10% 80% 10%;
        grid-template-areas: "header" "main" "footer";
    }
    @media screen and (min-width: 639px) {
        .app-container {
            display: grid;
            grid-template-columns: 20% 80%;
            grid-template-rows: 10% 90%;
            grid-template-areas: "header header" "lg_aside main";
        }
    }
    .sm_app-nav {
       grid-area: sm_aside;
    }
    .app-main {
        grid-area: main;
    }
    .app-header {
        grid-area: header;
    }
</style>
