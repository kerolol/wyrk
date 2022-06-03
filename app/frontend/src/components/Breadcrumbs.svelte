<script lang="ts">
    export let path: string;

    $: headers = path.split(';')
</script>

<ul class="flex mt-4 text-sm text-wyrk-200">
    {#each headers as header, index}
        <li class="mr-4">{header}</li>
        {#if headers.length -1 !== index}
            <li class="mr-4">/</li>
        {/if}
    {/each}
</ul>