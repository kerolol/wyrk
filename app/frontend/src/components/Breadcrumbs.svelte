<script lang="ts">
    import { Link } from 'svelte-navigator'
    import type { Breadcrumb } from '../interfaces'
    

    export let items: Array<Breadcrumb>
</script>

<ul class="flex mt-4 text-sm text-wyrk-200">
    {#each items as item, index}
        <li class="mr-4">
            <Link to="{item.path}">
                {item.label}
            </Link>
        </li>
        {#if items.length -1 !== index}
            <li class="mr-4">/</li>
        {/if}
    {/each}
</ul>