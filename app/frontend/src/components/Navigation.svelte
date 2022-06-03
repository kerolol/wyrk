<script lang="ts">
    import NavLink from "./NavLink.svelte"
</script>

<nav class="h-full bg-wyrk-500 w-80 fixed left-0 top-0 z-40 pt-24">
    <ul class="ml-8 mt-4">
        <NavLink to="/" icon="home">Home</NavLink>
        <NavLink to="/projects" icon="projects">Projects</NavLink>
    </ul>
</nav>