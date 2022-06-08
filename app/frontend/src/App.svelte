<script lang="ts">
    import './app.css'
    import { Router, Route } from 'svelte-navigator'
    import Home from './views/Home/index.svelte'
    import Projects from './views/Projects/index.svelte'
    import Project from './views/Project/index.svelte'
    import Header from './components/Header.svelte'
    import Navigation from './components/Navigation.svelte'
    import Content from './components/Content.svelte'
</script>

<Router>
    <Header />
    <Navigation />
    <Content>
        <Route path="/" component={Home} />
        <Route path="/projects/*" component={Projects} />
        <Route path="/project/*" component={Project} />
    </Content>
</Router>
