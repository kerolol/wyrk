<script lang="ts">
    import { Router, Route } from 'svelte-navigator'
    import ProjectsHome from './ProjectsHome.svelte'
    import TaskList from './TaskList.svelte'
</script>

<Router primary={false}>
    <Route path="/" component={ProjectsHome} />
    <Route path="/tasks" component={TaskList} />
</Router>