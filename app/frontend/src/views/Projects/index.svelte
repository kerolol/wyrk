<script lang="ts">
    import { Router, Route } from 'svelte-navigator'
    import ProjectsHome from './ProjectsHome.svelte'
</script>

<Router primary={false}>
    <Route path="/" component={ProjectsHome} />
</Router>