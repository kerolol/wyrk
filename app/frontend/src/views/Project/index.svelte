<script lang="ts">
    import { Router, Route } from 'svelte-navigator'
    import ProjectHome from './ProjectHome.svelte'
    import TaskList from './TaskList.svelte'
</script>

<Router primary={false}>
    <Route path="/:slug" component={ProjectHome} />
    <Route path="/:slug/tasks" component={TaskList} />
</Router>