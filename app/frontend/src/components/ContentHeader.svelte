<script lang="ts">
    import Breadcrumbs from "./Breadcrumbs.svelte"
    import type { Breadcrumb } from '../interfaces'

    export let title: string
    export let breadcrumbs: Array<Breadcrumb>|null
</script>

<h1 class="text-wyrk-200 text-xl font-bold {breadcrumbs ? '' : 'mb-8'}">{title}</h1>

{#if breadcrumbs}
    <Breadcrumbs items="{breadcrumbs}" />
{/if}