<script lang="ts">
    import Breadcrumbs from "./Breadcrumbs.svelte";

    export let title: string;
    export let breadcrumbs: string|null;
</script>

<h1 class="text-wyrk-200 text-xl font-bold">{title}</h1>

{#if breadcrumbs}
    <Breadcrumbs path="{breadcrumbs}" />
{/if}