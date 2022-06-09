<script lang="ts">
    import Breadcrumbs from "./Breadcrumbs.svelte"
    import type { Breadcrumb } from '../interfaces'

    export let title: string
    export let breadcrumbs: Array<Breadcrumb>|null
    export let useSlot: boolean = false;
</script>

<div class="flex justify-between content-center {breadcrumbs ? '' : 'mb-8'}">
    <h1 class="text-wyrk-200 text-xl font-bold">{title}</h1>
    {#if useSlot}
        <slot></slot>
    {/if}
</div>

{#if breadcrumbs}
    <Breadcrumbs items="{breadcrumbs}" />
{/if}